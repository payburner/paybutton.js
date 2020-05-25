import { a as patchEsm, b as bootstrapLazy } from './index-358d4d2b.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["pay-button",[[1,"pay-button",{"buttonid":[1],"price":[2],"calcedPrice":[32],"purchase":[32],"payburnerStatus":[32],"payburnerLoggedIn":[32],"modalStatus":[32],"buttonStatus":[32]},[[4,"PayburnerStatus","handleStatusEvent"]]]]]], options);
});

export { defineCustomElements };
