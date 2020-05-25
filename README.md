
## Using this component

To create pay buttons:
- You first need to have a Payburner Wallet (click to <a href="https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en">install</a>)
- In your Payburner Wallet, click on your profile icon, and then open `Pay Button Manager`.
- Click on the `+ shopping cart ` icon and then enter the information for your pay button.
- Once the pay button has been created, Click on the `more` icon and then select `Embed`.  You will receive instructions for installing the pay button.

### Script tag
- Put a script tag similar to this `<script src="https://www.payburner.com/payburner.js"></script>` in the head of your index.html to import payburner.       
- Put a script tag similar to this `<script src='https://unpkg.com/@payburner/paybutton.js@0.0.5/dist/pay-button.js'></script>` in the head of your index.html to load the component
- Then you can use the element anywhere in your template, JSX, html etc
   <pay-button buttonid="7b2d5583-a178-434d-8048-516f784f8f92" ></pay-button>
