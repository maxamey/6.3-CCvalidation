# 6.3 CC Validation

##TODO
- [x] Make structure for the credit card
  - [x] Credit card has a number input
  - [x] Credit card has an expiration date input
  - [x] Credit card has a cvv input
  - [x] Credit card has a name input
- [x] Make the structure look like a credit card
  - [x] border has rounded edges
  - [x] inputs are in the right places
  - [x] space for the logo
- [] If any input (number, date, cvv, and name) is not valid
     then the border of said input should be red
  - [] Validate cc numbers input
    - [x] set state for cc number
    - [x] Listen for input value changes
    - [x] use validator method to see if current
         input value is a correct cc number
    - [] toggle class for cc number if valid
  - [] Validate cc month input
  - [] Validate cc year input
  - [] Validate cc cvv input
  - [] Validate cc name input

## Development
  - `$ npm install -g webpack`
  - `$ npm install -g babel-cli`
  - `$ npm install -g webpack-dev-server`
