# Checkout System
This was developed using React and Material UI. Checkout the demo-ready version [here](https://boiling-escarpment-74904.herokuapp.com/)

## Local Development Instructions
Run `npm start` to test on `localhost:8080`

### Notes (suggested improvements)
* Improve overall UI/UX. I used Google's Material UI for React to whip up a quick user-interface without having to spend a lot of time on branding, animations, color schemes, etc. For something small like this, it works just fine

* Add a few loading icons between the first and second checkout dialog window to simulate a mock AJAX request (ex: submitting a payment)

* Instead of -/+ buttons, utilize number inputs on each item so that a user can easily input the number of items they want

* Have a better flow. For example, a dedicated screen to just the checkout items, followed by another page for just the subtotal, then lastly a page showing the confirmation. I utilized dialog windows in this example
