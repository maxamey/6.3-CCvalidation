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
- [x] If any input (number, date, cvv, and name) is not valid
     then the border of said input should be red
  - [x] Validate cc numbers input
    - [x] set state for cc number
    - [x] listen for input value changes
    - [x] use validator method to see if current
         input value is a correct cc number
    - [x] toggle class for cc number if valid
    - [x] set state back to false when numbers are
          invalid again
  - [x] Validate cc month input
    - [x] set state for cc month input
    - [x] listen for input value changes
    - [x] check if current input value is a correct
         month number
    - [x] toggle class for cc month if valid
    - [x] set state back to false when numbers are
         invalid again
  - [x] Validate cc year input
  - [x] Validate cc cvv input
  - [x] Validate cc name input
    - [x] set state for cc name
    - [x] listen for input value changes
    - [x] use validator method to see if current
         input value is a correct string length
    - [x] toggle class for cc name if validator
    - [x] set state back to false when name input is
         invalid again


## Development
  - `$ npm install -g webpack`
  - `$ npm install -g babel-cli`
  - `$ npm install -g webpack-dev-server`
