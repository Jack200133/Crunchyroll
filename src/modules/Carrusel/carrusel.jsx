/* eslint-disable react/jsx-indent */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import CarrulItem1 from '../CarrulItem1/CarrulItem1.jsx'
import CarrulItem2 from '../CarrulItem2/carrulItem2.jsx'
import CarrulItem3 from '../CarrulItem3/carrulItem3.jsx'
import DownMenu from '../DownMenu/DownMenu.jsx'
import t1 from '../../../assets/imgs/aharen.png'
import t2 from '../../../assets/imgs/dance.png'
import t3 from '../../../assets/imgs/kaguya.png'
import t4 from '../../../assets/imgs/love.png'
import t5 from '../../../assets/imgs/skeleton.png'
import t6 from '../../../assets/imgs/spy.png'
import Izq from '../../../assets/arrowizq.svg'
import Der from '../../../assets/arrowder.svg'
import './carrusel.css'

const Carrusel = () => {
  const ops = [t1, t2, t3, t4, t5, t6]
  const [Index, setIndex] = useState(0)
  const [Image, setImage] = useState(ops[0])
  const opsBack = [<CarrulItem2 mage={Image} />, <CarrulItem3 mage={Image} />,
  <CarrulItem1 mage={Image} />, <CarrulItem3 mage={Image} />,
  <CarrulItem2 mage={Image} />, <CarrulItem3 mage={Image} />]

  const selectImage = (index, images, next = true) => {
    const condi = next ? index < images.length - 1 : index > 0
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

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!', Index)
      next()
    }, 8000)
    return () => clearInterval(interval)
  }, [Index])

  return (
    <div className="containertotal">
      {opsBack[Index]}
      <button type="button" className="iconizq" onClick={next}>
        <Izq className="izq" />
      </button>
      <button type="button" className="iconder" onClick={previous}>
        <Der className="der" />
      </button>
      <DownMenu activo={Index} />
    </div>
  )
}

export default Carrusel
