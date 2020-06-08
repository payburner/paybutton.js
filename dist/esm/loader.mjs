import { a as patchEsm, b as bootstrapLazy } from './index-34d59c58.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["pay-button",[[1,"pay-button",{"buttonid":[1],"price":[2],"reference":[1],"fiatprice":[2],"fiatcurrency":[1],"allowresetanytime":[4],"calcedPrice":[32],"fiatrate":[32],"purchase":[32],"payburnerStatus":[32],"payburnerLoggedIn":[32],"modalStatus":[32],"buttonStatus":[32]},[[4,"PayburnerStatus","handleStatusEvent"]]]]]], options);
});

export { defineCustomElements };
