import { Component, h, Element, Event, Listen, Prop, State, Host } from '@stencil/core';
import axios from 'axios';
import copy from 'copy-text-to-clipboard';
class Purchase {
    constructor(purchaseId, status, expectedDestinationXrpAddress, expectedDestinationXrpAddressTag, expectedAmount, statusUrl) {
        this.purchaseId = purchaseId;
        this.status = status;
        this.expectedAmount = expectedAmount;
        this.expectedDestinationXrpAddress = expectedDestinationXrpAddress;
        this.expectedDestinationXrpAddressTag = expectedDestinationXrpAddressTag;
        this.statusUrl = statusUrl;
    }
}
class PayburnerStatus {
}
class CustomEvent {
}
export class PayButton {
    handleClick() {
        const d = {
            price: this.calcedPrice
        };
        if (typeof this.reference !== 'undefined') {
            d['reference'] = this.reference;
        }
        if (typeof this.fiatcurrency !== 'undefined' && this.fiatcurrency !== null &&
            typeof this.fiatprice !== 'undefined' && this.fiatprice !== null) {
            d['fiatcurrency'] = this.fiatcurrency;
            d['fiatprice'] = this.fiatprice;
            d['fiatrate'] = this.fiatrate;
        }
        axios.post('https://gateway.payburner.com/v1/gateway/paybuttons/' +
            this.buttonid + '/purchase', d)
            .then(response => response.data.data)
            .then((data) => {
            console.log('##########' + JSON.stringify(data, null, 2));
            this.purchase = new Purchase(data.purchaseId, data.status, data.expectedDestinationXrpAddress, data.expectedDestinationXrpAddressTag, data.expectedAmount, data.statusUrl);
            this.makePayment();
        });
    }
    handleReset() {
        if (!this.allowresetanytime && (this.buttonStatus !== 'ERROR' && this.buttonStatus !== 'TIMEOUT')) {
            console.log('Not allowing reset on settled.');
            return;
        }
        else {
            this.modalStatus = 'hide';
            this.buttonStatus = 'LOADED';
            this.purchase = new Purchase('', '', '', '', 0, '');
        }
    }
    handlePayburnerStatus(payburnerStatus) {
        if (typeof this.payburnerStatus === 'undefined') {
            this.payburnerStatus = payburnerStatus;
        }
        else if (this.payburnerStatus !== payburnerStatus) {
            this.payburnerStatus = payburnerStatus;
        }
    }
    handlePayburnerLoggedIn(loggedIn) {
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
    handleStatusEvent(event) {
        const detail = event.detail;
        console.log('PayButton received payburner status event:' + JSON.stringify(detail));
        this.handlePayburnerStatus(detail.extensionStatus);
        this.handlePayburnerLoggedIn(detail.loggedIn);
    }
    componentWillLoad() {
        if (typeof this.allowresetanytime === 'undefined' || this.allowresetanytime === null) {
            this.allowresetanytime = true;
        }
        this.modalStatus = 'hide';
        this.buttonStatus = 'LOADING';
        this.purchase = new Purchase('', '', '', '', 0, '');
        const comp = this;
        return axios.get('https://gateway.payburner.com/v1/gateway/paybuttons/' +
            this.buttonid, {})
            .then(response => response.data.data)
            .then(data => {
            const price = parseFloat(data.price);
            if (data.buttonType === 'FIXED_PRICE') {
                comp.calcedPrice = price;
                comp.buttonStatus = 'LOADED';
            }
            else {
                if (typeof comp.fiatcurrency !== 'undefined' && comp.fiatcurrency !== null &&
                    typeof comp.fiatprice !== 'undefined' && comp.fiatprice !== null) {
                    axios.get('https://gateway.payburner.com/v1/gateway/rate/' +
                        comp.fiatcurrency, {})
                        .then(fxResponse => fxResponse.data.data)
                        .then(fxData => {
                        comp.fiatrate = fxData.rate;
                        comp.calcedPrice = parseFloat((comp.fiatprice / fxData.rate).toFixed(6));
                        comp.buttonStatus = 'LOADED';
                    });
                }
                else if (typeof comp.price !== 'undefined' && comp.price !== null) {
                    comp.calcedPrice = comp.price;
                    comp.buttonStatus = 'LOADED';
                }
                else {
                    comp.calcedPrice = price;
                    comp.buttonStatus = 'LOADED';
                }
            }
        });
    }
    extractError(error) {
        if (typeof error === 'string') {
            return error;
        }
        if (typeof error === 'object' && typeof error.error !== 'undefined') {
            return error.error;
        }
        return JSON.stringify(error);
    }
    makePayment() {
        const PAYBURNER = window.PAYBURNER;
        const comp = this;
        this.buttonStatus = 'WAITING';
        PAYBURNER.makePaymentWithTag(this.purchase.expectedDestinationXrpAddress, parseInt(this.purchase.expectedDestinationXrpAddressTag), this.purchase.expectedAmount)
            .then(function (response) {
            if (typeof response.error !== 'undefined') {
                //alert(JSON.stringify(response, null, 2));
                const purchase = comp.purchase;
                purchase.status = 'ERROR';
                comp.purchase = purchase;
                console.log('Error received from payment request:' + comp.extractError(response.error));
                comp.buttonStatus = 'ERROR';
            }
            else {
                comp.buttonStatus = 'SETTLING';
                if (response.state === 'SUCCESS') {
                    const count = { count: 0, status: 'PENDING' };
                    const interval = setInterval(async () => {
                        const purchaseStatus = await axios.get(comp.purchase.statusUrl);
                        comp.purchase = purchaseStatus.data.data;
                        if (purchaseStatus.data.data.status === 'SETTLED') {
                            count.status = 'SETTLED';
                            clearInterval(interval);
                            console.log('SETTLED', response.finalized.hash, response.finalized.engine_result);
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
        const PAYBURNER = window.PAYBURNER;
        if (typeof PAYBURNER === 'undefined') {
            return false;
        }
        return PAYBURNER.isPayburnerConnected();
    }
    isPayburnerLoggedIn() {
        const PAYBURNER = window.PAYBURNER;
        if (typeof PAYBURNER === 'undefined') {
            return false;
        }
        return PAYBURNER.isPayburnerLoggedIn();
    }
    awaitPayment() {
        const comp = this;
        const count = { status: 'PENDING' };
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
        const d = {
            price: this.calcedPrice
        };
        if (typeof this.reference !== 'undefined') {
            d['reference'] = this.reference;
        }
        if (typeof this.fiatcurrency !== 'undefined' && this.fiatcurrency !== null &&
            typeof this.fiatprice !== 'undefined' && this.fiatprice !== null) {
            d['fiatcurrency'] = this.fiatcurrency;
            d['fiatprice'] = this.fiatprice;
            d['fiatrate'] = this.fiatrate;
        }
        axios.post('https://gateway.payburner.com/v1/gateway/paybuttons/' +
            this.buttonid + '/purchase', d)
            .then(response => response.data.data)
            .then((data) => {
            this.purchase = new Purchase(data.purchaseId, data.status, data.expectedDestinationXrpAddress, data.expectedDestinationXrpAddressTag, data.expectedAmount, data.statusUrl);
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
        return h("svg", { fill: "currentColor", style: { 'display': 'inline-block', 'vertical-align': 'middle' }, height: "12", width: "12", viewBox: "0 0 1792 1792" },
            h("path", { d: "M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z" }));
    }
    renderModal(showGetPayburner, showNotLoggedIn) {
        if (this.purchase.status === 'SETTLED') {
            return h("div", { id: "myModal", class: this.modalStatus === 'hide' ? 'modal hidden' : 'modal shown' },
                h("div", { class: "modal-content" },
                    h("span", { class: "close", onClick: () => this.closeModal() }, "\u00D7"),
                    h("p", { class: "xrp-price", onClick: () => copy(this.purchase.expectedAmount.toString()) },
                        this.purchase.expectedAmount,
                        " XRP"),
                    h("p", { class: "payburner-blurb" }, "To pay, send XRP to the following address and tag using any XRP wallet."),
                    h("p", { class: "label" }, "XRP Address"),
                    h("p", { class: "xrp-address", onClick: () => copy(this.purchase.expectedDestinationXrpAddress) },
                        this.purchase.expectedDestinationXrpAddress,
                        " ",
                        this.renderCopyIcon()),
                    h("p", { class: "label" }, "Tag"),
                    h("p", { class: "xrp-address-tag", onClick: () => copy(this.purchase.expectedDestinationXrpAddressTag) },
                        this.purchase.expectedDestinationXrpAddressTag,
                        " ",
                        this.renderCopyIcon()),
                    h("hr", null),
                    h("p", { class: "waiting" },
                        "Thank you for your payment!  Your payment id is ",
                        this.purchase.purchaseId),
                    h("hr", null),
                    showGetPayburner ? (h("p", { class: "payburner-blurb" },
                        "If you don't have an XRP wallet or want a great payment experience, click here to install the ",
                        h("a", { href: "https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en" }, "Payburner Wallet"),
                        ".")) : null,
                    showNotLoggedIn ? (h("p", { class: "payburner-blurb" }, "Your Paybuner Wallet is not logged in.")) : null));
        }
        else {
            return h("div", { id: "myModal", class: this.modalStatus === 'hide' ? 'modal hidden' : 'modal shown' },
                h("div", { class: "modal-content" },
                    h("span", { class: "close", onClick: () => this.closeModal() }, "\u00D7"),
                    h("p", { class: "xrp-price", onClick: () => copy(this.purchase.expectedAmount.toString()) },
                        this.purchase.expectedAmount,
                        " XRP"),
                    h("p", { class: "payburner-blurb" }, "To pay, send XRP to the following address and tag using any XRP wallet."),
                    h("p", { class: "label" }, "XRP Address"),
                    h("p", { class: "xrp-address", onClick: () => copy(this.purchase.expectedDestinationXrpAddress) },
                        this.purchase.expectedDestinationXrpAddress,
                        " ",
                        this.renderCopyIcon()),
                    h("p", { class: "label" }, "Tag"),
                    h("p", { class: "xrp-address-tag", onClick: () => copy(this.purchase.expectedDestinationXrpAddressTag) },
                        this.purchase.expectedDestinationXrpAddressTag,
                        " ",
                        this.renderCopyIcon()),
                    h("hr", null),
                    h("p", { class: "waiting" }, "Waiting for you to send XRP to the address and tag."),
                    h("div", { class: "lds-ellipsis" },
                        h("div", null),
                        h("div", null),
                        h("div", null),
                        h("div", null)),
                    h("hr", null),
                    showGetPayburner ? (h("p", { class: "payburner-blurb" },
                        "If you don't have an XRP wallet or want a great payment experience, click here to install the ",
                        h("a", { href: "https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en" }, "Payburner Wallet"),
                        ".")) : null,
                    showNotLoggedIn ? (h("p", { class: "payburner-blurb" }, "Your Paybuner Wallet is not logged in.")) : null));
        }
    }
    render() {
        const PAYBURNER = window.PAYBURNER;
        if (typeof PAYBURNER === 'undefined') {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("div", null,
                    h("button", { onClick: () => this.openModal(), class: "pure-material-button-contained" }, this.buttonStatus === 'LOADED' ? (this.calcedPrice + ' XRP') : (this.buttonStatus)),
                    this.renderModal(false, false)));
        }
        else if (!this.isPayburnerConnected()) {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("div", null,
                    h("button", { class: "pure-material-button-contained", onClick: () => this.openModal() }, this.buttonStatus === 'LOADED' ? (this.calcedPrice + ' XRP') : (this.buttonStatus)),
                    this.renderModal(true, false)));
        }
        else if (!this.isPayburnerLoggedIn()) {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("div", null,
                    h("button", { class: "pure-material-button-contained", onClick: () => this.openModal() }, this.buttonStatus === 'LOADED' ? (this.calcedPrice + ' XRP') : (this.buttonStatus)),
                    this.renderModal(false, true)));
        }
        else if (this.buttonStatus === 'PENDING') {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("button", { class: "pure-material-button-contained" }, this.buttonStatus));
        }
        else if (this.buttonStatus === 'ERROR') {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("button", { onClick: () => this.handleReset(), class: "pure-material-button-contained" }, "ERROR"));
        }
        else if (this.buttonStatus === 'WAITING') {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("button", { onClick: () => this.handleReset(), class: "pure-material-button-contained" }, "WAITING"));
        }
        else if (this.buttonStatus === 'TIMEOUT') {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("button", { onClick: () => this.handleReset(), class: "pure-material-button-contained" }, "TIMEOUT"));
        }
        else if (this.buttonStatus === 'SETTLING') {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("button", { onClick: () => this.handleReset(), class: "pure-material-button-contained" }, this.buttonStatus));
        }
        else if (this.buttonStatus === 'SETTLED') {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("button", { onClick: () => this.handleReset(), class: "pure-material-button-contained" }, this.buttonStatus));
        }
        else if (this.buttonStatus === 'LOADED') {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("button", { onClick: () => this.handleClick(), class: "pure-material-button-contained" },
                    this.calcedPrice,
                    " XRP"));
        }
        else {
            return h(Host, { purchaseId: this.purchase.purchaseId, status: this.buttonStatus },
                h("button", { onClick: () => this.handleClick(), class: "pure-material-button-contained" },
                    "UNKNOWN: ",
                    this.buttonStatus));
        }
    }
    static get is() { return "pay-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pay-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["pay-button.css"]
    }; }
    static get properties() { return {
        "buttonid": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The first name"
            },
            "attribute": "buttonid",
            "reflect": false
        },
        "price": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "price",
            "reflect": false
        },
        "reference": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "reference",
            "reflect": false
        },
        "fiatprice": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fiatprice",
            "reflect": false
        },
        "fiatcurrency": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fiatcurrency",
            "reflect": false
        },
        "allowresetanytime": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "allowresetanytime",
            "reflect": false
        }
    }; }
    static get states() { return {
        "calcedPrice": {},
        "fiatrate": {},
        "purchase": {},
        "payburnerStatus": {},
        "payburnerLoggedIn": {},
        "modalStatus": {},
        "buttonStatus": {}
    }; }
    static get events() { return [{
            "method": "settled",
            "name": "settled",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "PayburnerStatus",
            "method": "handleStatusEvent",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
