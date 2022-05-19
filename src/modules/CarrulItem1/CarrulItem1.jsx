import React from 'react'
import Proptypes from 'prop-types'
import './CarrulItem1.css'
import Cola from '../../../assets/cola.svg'

const CarrulItem1 = ({ mage }) => (
  <div className="containcercarrusel1">
    <Cola className="colita" />
    <div className="base" style={{ backgroundImage: `url(${mage})` }} />
  </div>
)

CarrulItem1.propTypes = {
  mage: Proptypes.string.isRequired,
}

export default CarrulItem1
