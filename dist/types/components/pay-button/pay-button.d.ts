import { EventEmitter } from '../../stencil-public-runtime';
declare class Purchase {
    constructor(purchaseId: string, status: string, expectedDestinationXrpAddress: string, expectedDestinationXrpAddressTag: string, expectedAmount: number, statusUrl: string);
    purchaseId: string;
    status: string;
    expectedDestinationXrpAddress: string;
    expectedDestinationXrpAddressTag: string;
    expectedAmount: number;
    receivedAmount: number;
    statusUrl: string;
}
export declare class PayButton {
    /**
     * The unique identifier of the pay button
     */
    buttonid: string;
    /**
     * Override an optional priced pay button with a price in XRP
     */
    price: number;
    /**
     * This allows you to specify an external reference with the payment.  Useful for correlating payments with orders.
     */
    reference: string;
    /**
     * Override an optionally priced paybutton with a fiat price.
     */
    fiatprice: number;
    /**
     * The fiat currency of the fiat price.
     */
    fiatcurrency: string;
    /**
     * By default true.  Set to false to limit the resets.
     */
    allowresetanytime: boolean;
    calcedPrice: number;
    fiatrate: number;
    purchase: Purchase;
    payburnerStatus: string;
    payburnerLoggedIn: boolean;
    modalStatus: string;
    buttonStatus: string;
    el: HTMLElement;
    settled: EventEmitter;
    PAYBURNER: any;
    handleClick(): void;
    handleReset(): void;
    handlePayburnerStatus(payburnerStatus: string): void;
    handlePayburnerLoggedIn(loggedIn: boolean): void;
    disconnectedCallback(): void;
    handleStatusEvent(event: any): void;
    componentWillLoad(): Promise<void>;
    extractError(error: any): any;
    makePayment(): void;
    isPayburnerConnected(): any;
    isPayburnerLoggedIn(): any;
    awaitPayment(): void;
    openModal(): void;
    closeModal(): void;
    renderCopyIcon(): any;
    renderModal(showGetPayburner: boolean): any;
    render(): any;
}
export {};
