/* eslint-disable react/jsx-indent */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, cloneElement } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
  const [isnext, setnext] = useState(true)
  const [timeout, settime] = useState(2000)

  const selectImage = (index, images, next = true) => {
    const condi = next ? index < images.length - 1 : index > 0
    const nextIndex = next
      ? condi ? index + 1 : 0
      : condi ? index - 1 : images.length - 1
    setnext(next)
    settime(2000)
    setIndex(nextIndex)
  }

  const previous = () => {
    selectImage(Index, ops, false)
  }

  const next = () => {
    selectImage(Index, ops)
  }
  const handleDownClick = (index) => {
    settime(300)
    if (Index > index) {
      setnext(false)
      for (let i = Index; i >= index; i -= 1) {
        setTimeout(() => {
          setIndex(i)
        }, 300 * (Index - i))
      }
      setTimeout(() => {
        settime(2000)
      }, 300 * ((Index - index) + 1))
    } else {
      for (let i = Index; i <= index; i += 1) {
        setTimeout(() => {
          setIndex(i)
        }, 300 * i)
      }
      setTimeout(() => {
        settime(2000)
      }, 300 * ((index - Index) + 1))
    }
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      next()
    }, 8000)
    return () => clearInterval(interval)
  }, [Index])
  const Image = ops[Index]
  const opsBack = [<CarrulItem2 mage={Image} className="carruselItem" />, <CarrulItem3 mage={Image} className="carruselItem" />,
  <CarrulItem1 mage={Image} className="carruselItem" />, <CarrulItem3 mage={Image} className="carruselItem" />,
  <CarrulItem2 mage={Image} className="carruselItem" />, <CarrulItem3 mage={Image} className="carruselItem" />]
  return (
    <div className="containertotal">
      <TransitionGroup
        className="HOKL"
        childFactory={
          (nino) => (
            cloneElement(nino, {
              classNames: isnext ? 'right' : 'left',
            })
          )
        }
      >
        <CSSTransition
          key={Index}
          timeout={timeout}
        >
          {opsBack[Index]}
        </CSSTransition>
      </TransitionGroup>
      <button type="button" className="iconizq" onClick={next}>
        <Izq className="izq" />
      </button>
      <button type="button" className="iconder" onClick={previous}>
        <Der className="der" />
      </button>
      <DownMenu activo={Index} onDownClick={handleDownClick} />
    </div>
  )
}

export default Carrusel
