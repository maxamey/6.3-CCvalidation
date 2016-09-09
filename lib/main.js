import React from 'react'
import validator from 'validator'

export default React.createClass({
  getInitialState(){
    return {
      ccNumber: false,
      ccName: false,
      ccMonth: false,
      ccYear: false
    }
  },

  ccNumberHandler(e) {
    if(validator.isCreditCard(e.target.value)){
      this.setState({
        ccNumber: true
      })
    }else{
      this.setState({
        ccNumber: false
      })
    }
  },

  ccNameHandler(e) {
    if(validator.isLength(e.target.value, {min: 8, max: 20})){
      this.setState({
        ccName: true
      })
    }else{
      this.setState({
        ccName: false
      })
    }
  },

  ccMonthHandler(e) {
    if(validator.isInt(e.target.value, {min: 1, max: 12, allow_leading_zeroes: true})){
      this.setState({
        ccMonth: true
      })
    }else{
      this.setState({
        ccMonth: false
      })
    }
  },

  ccYearHandler(e) {
    if(validator.isInt(e.target.value, {min: 16, max: 36,})){
      this.setState({
        ccYear: true
      })
    }else{
      this.setState({
        ccYear: false
      })
    }
  },

  render() {
    return (
      <div className="cc__container">
        <form name="credit card"
              method="GET"
              className="cc__form">
          <h1 className="your">
            Your
            <span className="bank">Bank</span>
          </h1>
          <input type="text"
                 name="credit card number"
                 placeholder="XXXXXXXXXXXXXXXX"
                 className={`cc__inputs cc__number ${this.state.ccNumber == true ? "" : "cc__number--invalid"}`}
                 onChange={this.ccNumberHandler}/>
          <div className="cvv-expContainer">
            <h2 className="goodThru">
              GOOD<br/> THRU
            </h2>
            <input name="expire__month"
                   type="text"
                   className={`cc__inputs cc__expireMonth ${this.state.ccMonth == true ? "" : "cc__expireMonth--invalid"}`}
                   placeholder="MM"
                   onChange={this.ccMonthHandler}/>
            <input name="expire__year"
                   type="text"
                   className={`cc__inputs cc__expireYear ${this.state.ccYear == true ? "" : "cc__expireYear--invalid"}`}
                   placeholder="YY"
                   onChange={this.ccYearHandler}/>
            <input type="text"
                   name="credit card cvv"
                   placeholder="CVV"
                   className="cc__inputs cc__cvv"/>
          </div>
          <input type="text"
                 name="credit card name"
                 placeholder="YOUR NAME"
                 className={`cc__inputs cc__name ${this.state.ccName == true ? "" : "cc__name--invalid"}`}
                 onChange={this.ccNameHandler}/>
          <img src="assets/visa.png"
               alt="VISA Logo"
               className="cc__logo" />
        </form>
      </div>
    )
  }
})
