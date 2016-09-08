import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="cc__container">
        <form name="credit card"
              method="GET"
              className="cc__form">
          <input type="text"
                 name="credit card number"
                 placeholder="XXXXXXXXXXXXXXXX"
                 className="cc__number"/>
          <input name="expiry"
                 type="month"
                 className="expiry" required/>
          <input type="text"
                 name="credit card cvv"
                 placeholder="CVV"
                 className="cc__cvv"/>
          <input type="text"
                 name="credit card name"
                 placeholder="YOUR NAME"
                 className="cc__name"/>

        </form>
      </div>
    )
  }
})
