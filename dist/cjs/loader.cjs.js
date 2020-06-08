'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4cc0cfa6.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["pay-button.cjs",[[1,"pay-button",{"buttonid":[1],"price":[2],"reference":[1],"fiatprice":[2],"fiatcurrency":[1],"allowresetanytime":[4],"calcedPrice":[32],"fiatrate":[32],"purchase":[32],"payburnerStatus":[32],"payburnerLoggedIn":[32],"modalStatus":[32],"buttonStatus":[32]},[[4,"PayburnerStatus","handleStatusEvent"]]]]]], options);
});

exports.defineCustomElements = defineCustomElements;
