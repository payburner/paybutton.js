import {Component, h, Element, Event, EventEmitter, Listen, Prop, State, Host} from '@stencil/core';
import axios from 'axios';
import copy from 'copy-text-to-clipboard';


class Purchase {
    constructor(purchaseId: string, status: string, expectedDestinationXrpAddress: string,
                expectedDestinationXrpAddressTag: string, expectedAmount: number, statusUrl: string) {
        this.purchaseId = purchaseId;
        this.status = status;
        this.expectedAmount = expectedAmount;
        this.expectedDestinationXrpAddress = expectedDestinationXrpAddress;
        this.expectedDestinationXrpAddressTag = expectedDestinationXrpAddressTag;
        this.statusUrl = statusUrl
    }
    purchaseId: string;
    status: string;
    expectedDestinationXrpAddress: string;
    expectedDestinationXrpAddressTag: string;
    expectedAmount: number;
    receivedAmount: number;
    statusUrl: string;
}

class PayburnerStatus {
    extensionStatus: string;
    loggedIn: boolean;
}

class CustomEvent {
    detail: PayburnerStatus;
}

@Component({
    tag: 'pay-button',
    styleUrl: 'pay-button.css',
    shadow: true
})
export class PayButton {
    /**
     * The first name
     */
    @Prop() buttonid: string;

    @Prop() price: number;

    @State() calcedPrice: number;

    @State() purchase: Purchase;

    @State() payburnerStatus: string;

    @State() payburnerLoggedIn: boolean;

    @State() modalStatus: string;

    @State() buttonStatus: string;

    @Element() el: HTMLElement;

    @Event({
        eventName: 'settled',
        composed: true,
        cancelable: true,
        bubbles: true,
    }) settled: EventEmitter;

    handleClick() {
        axios.post('https://gateway.payburner.com/v1/gateway/paybuttons/' +
            this.buttonid + '/purchase', {
            price: this.calcedPrice
        })
        .then(response => response.data.data)
        .then((data) => {
            console.log('##########' + JSON.stringify(data, null, 2));
            this.purchase = new Purchase(data.purchaseId, data.status,
                data.expectedDestinationXrpAddress, data.expectedDestinationXrpAddressTag, data.expectedAmount, data.statusUrl);
            this.makePayment();
        });
    }

    handleReset() {
        this.modalStatus = 'hide';
        this.buttonStatus = 'LOADED';
        this.purchase = new Purchase('', '',
            '', '', 0, '');
    }

    handlePayburnerStatus(payburnerStatus: string) {
        if (typeof this.payburnerStatus === 'undefined') {
            this.payburnerStatus = payburnerStatus;
        }
        else if (this.payburnerStatus !== payburnerStatus) {
            this.payburnerStatus = payburnerStatus;
        }
    }

    handlePayburnerLoggedIn(loggedIn: boolean) {
        if (typeof this.payburnerLoggedIn === 'undefined') {
            this.payburnerLoggedIn = loggedIn;
        }
        else if (this.payburnerLoggedIn !== loggedIn) {
            this.payburnerLoggedIn = loggedIn;
        }
    }

    disconnectedCallback() {
        document.removeEventListener('PayburnerStatus', (e) => this.handleStatusEvent(e));
    }

    @Listen('PayburnerStatus', { target: 'document' })
    handleStatusEvent(event) {
        const detail = (event as CustomEvent).detail;

        this.handlePayburnerStatus(detail.extensionStatus);
        this.handlePayburnerLoggedIn(detail.loggedIn);
    }

    componentWillLoad() {
        this.modalStatus = 'hide';
        this.buttonStatus = 'LOADING';
        this.purchase = new Purchase('', '',
            '', '', 0, '');
        //document.addEventListener('PayburnerStatus', (e) => this.handleStatusEvent(e) );
        const comp = this;
        return axios.get('https://gateway.payburner.com/v1/gateway/paybuttons/' +
            this.buttonid, {})
        .then(response => response.data.data)
        .then(data => {
            console.log(JSON.stringify(data));
            console.log('Hi there!' + data.buttonType + ' ' + comp.price);
            const price = parseFloat(data.price);
            comp.calcedPrice = (data.buttonType === 'FIXED_PRICE' ? price : (
                    typeof comp.price !== 'undefined' && comp.price !== null ? comp.price : price)
            );
            console.log('Calced price:' + comp.calcedPrice);
            this.buttonStatus = 'LOADED';
        });
    }

    extractError( error ) {
        if (typeof error === 'string') {
            return error;
        }
        if (typeof error === 'object' && typeof error.error !== 'undefined') {
            return error.error;
        }
        return JSON.stringify(error);
    }

    makePayment() {
        const PAYBURNER = (window as any).PAYBURNER;
        const comp = this;
        this.buttonStatus = 'WAITING';
        PAYBURNER.makePaymentWithTag(this.purchase.expectedDestinationXrpAddress,
            parseInt(this.purchase.expectedDestinationXrpAddressTag), this.purchase.expectedAmount)
        .then(
            function (response) {


                if (typeof response.error !== 'undefined') {
                    //alert(JSON.stringify(response, null, 2));

                    const purchase = comp.purchase;
                    purchase.status = 'ERROR';
                    comp.purchase = purchase;
                    console.log(
                        'Error received from payment request:' + comp.extractError(
                        response.error));
                    comp.buttonStatus = 'ERROR';
                } else {
                        comp.buttonStatus = 'SETTLING';
                        if (response.state === 'SUCCESS') {
                            const count = { count: 0, status: 'PENDING' };
                            const interval = setInterval(async () => {
                                const purchaseStatus = await axios.get(comp.purchase.statusUrl );
                                comp.purchase = purchaseStatus.data.data;
                                if (purchaseStatus.data.data.status === 'SETTLED') {
                                    count.status = 'SETTLED';
                                    clearInterval(interval);
                                    console.log( 'SETTLED',
                                        response.finalized.hash,
                                        response.finalized.engine_result  );
                                    comp.buttonStatus = 'SETTLED';
                                    comp.settled.emit(comp.purchase);
                                }
                                else {
                                    count.count = count.count + 1;
                                    comp.buttonStatus = 'SETTLING';
                                    if (count.count > 10) {
                                        clearInterval(interval);
                                        comp.buttonStatus = 'TIMEOUT';
                                    }
                                }
                            }, 5000);
                        }
                        else {
                            comp.buttonStatus = 'SETTLING';
                        }

                }
            })
        .catch(function (error) {

                PAYBURNER.log("<- error: " + comp.extractError(error));

        });
    }

    isPayburnerConnected() {
        const PAYBURNER = (window as any).PAYBURNER;
        if (typeof PAYBURNER === 'undefined') {
            return false;
        }
        else if (typeof this.payburnerStatus === 'undefined') {
            return PAYBURNER.isPayburnerConnected();
        }
        else {
            return this.payburnerStatus === 'CONNECTED';
        }
    }

    isPayburnerLoggedIn() {
        const PAYBURNER = (window as any).PAYBURNER;
        if (typeof PAYBURNER === 'undefined') {
            return false;
        }
        else if (typeof this.payburnerLoggedIn === 'undefined') {
            return false;
        }
        else {
            return this.payburnerLoggedIn;
        }
    }

    awaitPayment() {
        const comp = this;
        const count = { status: 'PENDING' }
        this.buttonStatus = 'WAITING';
        const interval = setInterval(async () => {
            if (this.modalStatus === 'hide') {
                clearInterval(interval);
            }
            else {
                const purchaseStatus = await axios.get(comp.purchase.statusUrl);
                comp.purchase = purchaseStatus.data.data;
                if (purchaseStatus.data.data.status === 'SETTLED') {
                    count.status = 'SETTLED';
                    clearInterval(interval);
                    comp.buttonStatus = 'SETTLED';
                    comp.settled.emit(comp.purchase);
                }
            }
        }, 5000);
    }

    openModal() {

        axios.post('https://gateway.payburner.com/v1/gateway/paybuttons/' +
            this.buttonid + '/purchase', {
            price: this.calcedPrice
        })
        .then(response => response.data.data)
        .then((data) => {
            this.purchase = new Purchase(data.purchaseId, data.status,
                data.expectedDestinationXrpAddress, data.expectedDestinationXrpAddressTag, data.expectedAmount, data.statusUrl);
            this.buttonStatus = data.status;
            this.modalStatus = 'show';
            this.awaitPayment();
        });
    }

    closeModal() {
        this.modalStatus = 'hide';
        this.buttonStatus = 'LOADED';
    }

    renderCopyIcon() {
        return <svg fill="currentColor" style={{'display': 'inline-block', 'vertical-align': 'middle'}} height="12"
                    width="12" viewBox="0 0 1792 1792">
            <path
                d="M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z"></path>
        </svg>;
    }

    renderModal( showGetPayburner: boolean, showNotLoggedIn: boolean ) {

        if (this.purchase.status === 'SETTLED') {
            return <div id="myModal" class={this.modalStatus === 'hide' ? 'modal hidden' : 'modal shown'}>
                <div class="modal-content">
                    <span class="close" onClick={() => this.closeModal()}>&times;</span>
                    <p class="xrp-price"
                       onClick={() => copy(this.purchase.expectedAmount.toString())}>{this.purchase.expectedAmount} XRP</p>
                    <p class="payburner-blurb">
                        To pay, send XRP to the following address and tag using any XRP wallet.
                    </p>

                    <p class="label">
                        XRP Address
                    </p>
                    <p class="xrp-address" onClick={() => copy(this.purchase.expectedDestinationXrpAddress)}>
                        {this.purchase.expectedDestinationXrpAddress} {this.renderCopyIcon()}
                    </p>

                    <p class="label">
                        Tag
                    </p>
                    <p class="xrp-address-tag" onClick={() => copy(this.purchase.expectedDestinationXrpAddressTag)}>
                        {this.purchase.expectedDestinationXrpAddressTag} {this.renderCopyIcon()}
                    </p>

                    <hr/>

                    <p class="waiting">Thank you for your payment!  Your payment id is {this.purchase.purchaseId}</p>

                    <hr/>
                    {showGetPayburner ? (<p class="payburner-blurb">
                        If you don't have an XRP wallet or want a great payment experience, click here to install
                        the <a
                        href="https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en">Payburner
                        Wallet</a>.
                    </p>) : null}

                    {showNotLoggedIn ? (<p class="payburner-blurb">
                        Your Paybuner Wallet is not logged in.
                    </p>) : null}

                </div>

            </div>;
        }
        else {
            return <div id="myModal" class={this.modalStatus === 'hide' ? 'modal hidden' : 'modal shown'}>
                <div class="modal-content">
                    <span class="close" onClick={() => this.closeModal()}>&times;</span>
                    <p class="xrp-price"
                       onClick={() => copy(this.purchase.expectedAmount.toString())}>{this.purchase.expectedAmount} XRP</p>
                    <p class="payburner-blurb">
                        To pay, send XRP to the following address and tag using any XRP wallet.
                    </p>

                    <p class="label">
                        XRP Address
                    </p>
                    <p class="xrp-address" onClick={() => copy(this.purchase.expectedDestinationXrpAddress)}>
                        {this.purchase.expectedDestinationXrpAddress} {this.renderCopyIcon()}
                    </p>


                    <p class="label">
                        Tag
                    </p>
                    <p class="xrp-address-tag" onClick={() => copy(this.purchase.expectedDestinationXrpAddressTag)}>
                        {this.purchase.expectedDestinationXrpAddressTag} {this.renderCopyIcon()}
                    </p>

                    <hr/>

                    <p class="waiting">Waiting for you to send XRP to the address and tag.</p>

                    <div class="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>


                    <hr/>
                    {showGetPayburner ? (<p class="payburner-blurb">
                        If you don't have an XRP wallet or want a great payment experience, click here to install
                        the <a
                        href="https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en">Payburner
                        Wallet</a>.
                    </p>) : null}

                    {showNotLoggedIn ? (<p class="payburner-blurb">
                        Your Paybuner Wallet is not logged in.
                    </p>) : null}

                </div>

            </div>;
        }
    }


    render() {

        const PAYBURNER = (window as any).PAYBURNER;
        if (typeof PAYBURNER === 'undefined') {

            return <div>
                <button onClick={() => this.openModal()} class="pure-material-button-contained">{this.buttonStatus === 'LOADED' ? (this.calcedPrice + ' XRP') : (this.buttonStatus)}</button>
                {this.renderModal(false, false)}
                </div>;
        }
        else if (!this.isPayburnerConnected()) {

            return <div>
                <button class="pure-material-button-contained" onClick={() => this.openModal()} >{this.buttonStatus === 'LOADED' ? (this.calcedPrice + ' XRP') : (this.buttonStatus)}</button>
                {this.renderModal(true, false)}
            </div>;
        }
        else if (!this.isPayburnerLoggedIn()) {

            return <div>
                <button class="pure-material-button-contained" onClick={() => this.openModal()} >{this.buttonStatus === 'LOADED' ? (this.calcedPrice + ' XRP') : (this.buttonStatus)}</button>
                {this.renderModal(false, true)}
            </div>;
        }
        else if (this.buttonStatus === 'PENDING') {
            return <Host><button class="pure-material-button-contained">{this.buttonStatus}</button></Host>;
        }
        else if (this.buttonStatus === 'ERROR'  ) {
            return <button onClick={() => this.handleReset()} class="pure-material-button-contained">ERROR</button>;
        }
        else if (this.buttonStatus === 'WAITING'  ) {
            return <button onClick={() => this.handleReset()} class="pure-material-button-contained">WAITING</button>;
        }
        else if (this.buttonStatus === 'TIMEOUT'  ) {
            return <button onClick={() => this.handleReset()} class="pure-material-button-contained">TIMEOUT</button>;
        }
        else if ( this.buttonStatus === 'SETTLING') {
            return <button onClick={() => this.handleReset()} class="pure-material-button-contained">{this.buttonStatus}</button>;
        }
        else if ( this.buttonStatus === 'SETTLED') {
            return <Host status={this.buttonStatus}><button onClick={() => this.handleReset()} class="pure-material-button-contained">{ this.buttonStatus}</button></Host>;
        }
        else if ( this.buttonStatus === 'LOADED') {
            return <button onClick={() => this.handleClick()} class="pure-material-button-contained">{this.calcedPrice} XRP</button>;
        }
        else {
            return <button onClick={() => this.handleClick()} class="pure-material-button-contained">UNKNOWN: { this.buttonStatus}</button>;
        }

    }
}
