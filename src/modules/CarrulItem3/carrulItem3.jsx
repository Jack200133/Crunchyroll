import React from 'react'
import Proptypes from 'prop-types'
import './carrulItem3.css'
import Circle from '../../../assets/circle2.svg'

const CarrulItem3 = ({ mage }) => (
  <div className="containcercarrusel3">
    <Circle className="blue" />
    <Circle className="blue2" />
    <Circle className="blue3" />
    <div className="base" style={{ backgroundImage: `url(${mage})` }} />
  </div>

)

CarrulItem3.propTypes = {
  mage: Proptypes.string.isRequired,
}

export default CarrulItem3
