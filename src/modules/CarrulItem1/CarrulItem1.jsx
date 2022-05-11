import React from 'react'
import './CarrulItem1.css'
import Cola from '../../../assets/cola.svg'

const CarrulItem1 = ({ mage }) => {
  console.log('Mage:', mage)

  return (
    <div className="containcercarrusel1">
      <Cola className="colita" />
      <div className="base" style={{ backgroundImage: `url(${mage})` }} />
    </div>
  )
}

export default CarrulItem1
