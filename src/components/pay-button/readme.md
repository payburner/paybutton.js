# my-component



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute           | Description                                                                                                      | Type      | Default     |
| ------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `allowresetanytime` | `allowresetanytime` | By default true.  Set to false to limit the resets.                                                              | `boolean` | `undefined` |
| `buttonid`          | `buttonid`          | The unique identifier of the pay button                                                                          | `string`  | `undefined` |
| `fiatcurrency`      | `fiatcurrency`      | The fiat currency of the fiat price.                                                                             | `string`  | `undefined` |
| `fiatprice`         | `fiatprice`         | Override an optionally priced paybutton with a fiat price.                                                       | `number`  | `undefined` |
| `price`             | `price`             | Override an optional priced pay button with a price in XRP                                                       | `number`  | `undefined` |
| `reference`         | `reference`         | This allows you to specify an external reference with the payment.  Useful for correlating payments with orders. | `string`  | `undefined` |


## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `settled` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
