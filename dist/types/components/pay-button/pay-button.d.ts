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
     * The first name
     */
    buttonid: string;
    price: number;
    calcedPrice: number;
    purchase: Purchase;
    payburnerStatus: string;
    payburnerLoggedIn: boolean;
    modalStatus: string;
    buttonStatus: string;
    el: HTMLElement;
    settled: EventEmitter;
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
    isPayburnerLoggedIn(): boolean;
    awaitPayment(): void;
    openModal(): void;
    closeModal(): void;
    renderCopyIcon(): any;
    renderModal(showGetPayburner: boolean, showNotLoggedIn: boolean): any;
    render(): any;
}
export {};
