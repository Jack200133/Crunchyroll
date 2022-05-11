/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import './Carrusel.css'
import CarrulItem1 from '../CarrulItem1/CarrulItem1.jsx'
import CarrulItem2 from '../CarrulItem2/carrulItem2.jsx'
import CarrulItem3 from '../CarrulItem3/carrulItem3.jsx'
import t1 from '../../../assets/imgs/aharen.png'
import t2 from '../../../assets/imgs/dance.png'
import t3 from '../../../assets/imgs/spy.png'
import Izq from '../../../assets/arrowizq.svg'

const Carrusel = () => {
  const ops = [t1, t2, t3]
  const [Index, setIndex] = useState(0)
  const [Image, setImage] = useState(ops[0])
  const opsBack = [<CarrulItem1 mage={Image} />, <CarrulItem2 mage={Image} />, <CarrulItem3 mage={Image} />]

  const selectImage = (index, images, next = true) => {
    const condi = next ? index < images.length : index > 0
    const nextIndex = next
      ? condi ? index + 1 : 0
      : condi ? index - 1 : images.length - 1
    setImage(ops[nextIndex])
    setIndex(nextIndex)
  }

  const previous = () => {
    selectImage(Index, ops, false)
  }

  const next = () => {
    selectImage(Index, ops)
  }

  console.log('CARRUL: ', CarrulItem1)

  return (
    <div className="containertotal">
      {opsBack[Index]}
      <Izq className="iconizq" />
    </div>
  )
}

export default Carrusel
