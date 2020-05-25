'use strict';

const index = require('./index-4d88944c.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["pay-button.cjs",[[1,"pay-button",{"buttonid":[1],"price":[2],"calcedPrice":[32],"purchase":[32],"payburnerStatus":[32],"payburnerLoggedIn":[32],"modalStatus":[32],"buttonStatus":[32]},[[4,"PayburnerStatus","handleStatusEvent"]]]]]], options);
});
