import React from 'react'
import PropTypes from 'prop-types'

function CurrencyInput(props) {
  return (
    <div className="group" >
        <input className={props.name} type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)}/>
    </div>
  )
}

CurrencyInput.propTypes = {

  name: PropTypes.string,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func,

}

export default CurrencyInput