import React from 'react'

export default React.createClass({
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
                 className="cc__inputs cc__number"/>
          <div className="cvv-expContainer">
            <h2 className="goodThru">
              GOOD<br/> THRU
            </h2>
            <input name="expire__month"
                   type="text"
                   className="cc__inputs cc__expire--month"
                   placeholder="MM"/>
                 <input name="expire__year"
                   type="text"
                   className="cc__inputs cc__expire--year"
                   placeholder="YY"/>
            <input type="text"
                   name="credit card cvv"
                   placeholder="CVV"
                   className="cc__inputs cc__cvv"/>
          </div>
          <input type="text"
                 name="credit card name"
                 placeholder="YOUR NAME"
                 className="cc__inputs cc__name"/>
               <img src="assets/visa.png"
                    alt="VISA Logo"
                    className="cc__logo" />
        </form>
      </div>
    )
  }
})
