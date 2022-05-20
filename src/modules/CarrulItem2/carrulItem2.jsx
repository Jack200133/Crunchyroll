import React from 'react'
import './carrulItem2.css'
import Proptypes from 'prop-types'
import TriLine from '../../../assets/triLine.svg'
import Circle from '../../../assets/circle.svg'

const CarrulItem2 = ({ mage, className }) => (
  <div className={className} style={{ background: 'linear-gradient(0.25turn, #fab818, #f47521, #fab818)' }}>
    <TriLine className="Lines" />
    <Circle className="Circle" />
    <div className="base" style={{ backgroundImage: `url(${mage})` }} />
  </div>

)

CarrulItem2.propTypes = {
  mage: Proptypes.string.isRequired,
  className: Proptypes.string.isRequired,
}

export default CarrulItem2
