# Checkout System
My solution for the coding challenge listed below:

`Given a fixed, limited, catalog of items for sale, allow a checker to quickly process the order of a customer, compute sales tax at 7.2% and display a receipt.

Items for sale:
- Cabbage: $1.29
- Chuckit: $7.82
- Ammo: $.20
- DVD: $14.77
- Pants: $34.73
- Drill: $28.96`

This web-app was developed using React v15.1 and Material UI. Checkout the live demo [here](https://boiling-escarpment-74904.herokuapp.com/)

## Local Development Instructions
Run `npm start` to test on `localhost:8080`

### Notes (suggested improvements)
* Disable/Enable Checkout button depending on the number of items in cart. If quantity > 0, then enable the rest of the checkout process. Otherwise, you get to "checkout" with an empty cart.

* Improve overall UI/UX. I used Google's Material UI for React to whip up a quick user-interface without having to spend a lot of time on branding, animations, color schemes, etc. For something small like this, it works just fine

* Add a few loading icons between the first and second checkout dialog window to simulate a mock AJAX request (ex: submitting a payment)

* Instead of -/+ buttons, utilize number inputs on each item so that a user can easily input the number of items they want

* Have a better flow. For example, a dedicated screen to just the checkout items, followed by another page for just the subtotal, then lastly a page showing the confirmation. I utilized dialog windows in this example
