/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PayButton {
        "allowresetanytime": boolean;
        /**
          * The first name
         */
        "buttonid": string;
        "fiatcurrency": string;
        "fiatprice": number;
        "price": number;
        "reference": string;
    }
}
declare global {
    interface HTMLPayButtonElement extends Components.PayButton, HTMLStencilElement {
    }
    var HTMLPayButtonElement: {
        prototype: HTMLPayButtonElement;
        new (): HTMLPayButtonElement;
    };
    interface HTMLElementTagNameMap {
        "pay-button": HTMLPayButtonElement;
    }
}
declare namespace LocalJSX {
    interface PayButton {
        "allowresetanytime"?: boolean;
        /**
          * The first name
         */
        "buttonid"?: string;
        "fiatcurrency"?: string;
        "fiatprice"?: number;
        "onSettled"?: (event: CustomEvent<any>) => void;
        "price"?: number;
        "reference"?: string;
    }
    interface IntrinsicElements {
        "pay-button": PayButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pay-button": LocalJSX.PayButton & JSXBase.HTMLAttributes<HTMLPayButtonElement>;
        }
    }
}
