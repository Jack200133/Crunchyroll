import React from 'react'
import Proptypes from 'prop-types'
import './CarrulItem1.css'
import Cola from '../../../assets/cola.svg'

const CarrulItem1 = ({ mage, className }) => (
  <div className={className} style={{ background: 'linear-gradient(0.25turn, #f47521, #fab818)' }}>
    <Cola className="colita" />
    <div className="base" style={{ backgroundImage: `url(${mage})` }} />
  </div>
)

CarrulItem1.propTypes = {
  mage: Proptypes.string.isRequired,
  className: Proptypes.string.isRequired,
}

export default CarrulItem1
