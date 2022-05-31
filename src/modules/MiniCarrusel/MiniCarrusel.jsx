/* eslint-disable react/jsx-indent */
/* eslint-disable no-nested-ternary */
import React, { useState, cloneElement } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import MiniContainer from '../MiniContainer/MiniContainer'
import Izq from '../../../assets/arrowizq.svg'
import Der from '../../../assets/arrowder.svg'
import t1 from '../../../assets/minimgs/dress.jpeg'
import t2 from '../../../assets/minimgs/note.jpeg'
import t3 from '../../../assets/minimgs/cuckos.jpeg'
import t4 from '../../../assets/minimgs/tomo.jpeg'
import t5 from '../../../assets/minimgs/king.jpeg'
import t6 from '../../../assets/minimgs/bunny.jpg'
import t7 from '../../../assets/minimgs/date.jpeg'
import t8 from '../../../assets/minimgs/erased.jpeg'
import t9 from '../../../assets/minimgs/mushoku.jpeg'
import t10 from '../../../assets/minimgs/ass.jpeg'
import t11 from '../../../assets/minimgs/elite.jpg'
import t12 from '../../../assets/minimgs/jojo.jpeg'
import t13 from '../../../assets/minimgs/shiki.jpeg'
import t14 from '../../../assets/minimgs/aharen.jpeg'
import t15 from '../../../assets/minimgs/tapped.jpeg'
import t16 from '../../../assets/minimgs/horimiya.jpeg'
import t17 from '../../../assets/minimgs/ao.jpeg'
import t18 from '../../../assets/minimgs/loveafter.jpeg'

import './MiniCarrusel.css'

const m1 = {
  img: t1,
  title: 'My Dress-Up Darling',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: true,
}
const m2 = {
  img: t2,
  title: 'Death Note',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false,
}
const m3 = {
  img: t3,
  title: 'A couple of Cuckos',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false,
}
const m4 = {
  img: t4,
  title: 'Tomodachi Games',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false,
}
const m5 = {
  img: t5,
  title: 'Osama Ranking',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false,
}
const m6 = {
  img: t6,
  title: 'Seishun Buta Yarō wa Bunny Girl-senpai no Yume wo Minai',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: true,
}

const m7 = {
  img: t7,
  title: 'Date-A-Live',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false,
}
const m8 = {
  img: t8,
  title: 'Erased',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false,
}
const m10 = {
  img: t10,
  title: 'Assesination Classroom',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false,
}
const m9 = {
  img: t9,
  title: 'Mushoku Tensei Jobless Reincarnation',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false,
}
const m11 = {
  img: t11,
  title: 'Classroom of the Elite',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false,
}
const m12 = {
  img: t12,
  title: 'JoJo no Kimyō na Bōken',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false,
}

const m13 = {
  img: t13,
  title: "Shikimori's Not Just a Cutie",
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false,
}
const m14 = {
  img: t14,
  title: 'Aharen-san wa Hakerenai',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false,
}
const m15 = {
  img: t15,
  title: 'Trapped in a Dating Sim: The World of Otome Games is Tough for Mobs',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false,
}
const m16 = {
  img: t16,
  title: 'Horimiya',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false,
}
const m17 = {
  img: t17,
  title: 'Aoashi',
  tipo: 'Serie',
  sound: '',
  bookmark: false,
}
const m18 = {
  img: t18,
  title: 'Love After World Domination',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false,
}

const Carrusel = () => {
  const ops = [<MiniContainer datos={[m1, m2, m3, m4, m5, m6]} />,
  <MiniContainer datos={[m7, m8, m9, m10, m11, m12]} />,
  <MiniContainer datos={[m13, m14, m15, m16, m17, m18]} />]
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

  return (
    <div className="containerMini">
      <div className="box">
        <h2 className="titti"> Nuestras recomendaciones</h2>
      </div>
      <div className="gradient" />
      <div className="butuns">
        <button type="button" className="iconder2" onClick={previous}>
          <Der className="der" />
        </button>
        <TransitionGroup
          className="HOLK"
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
            {ops[Index]}
          </CSSTransition>
        </TransitionGroup>
        <button type="button" className="iconizq2" onClick={next}>
          <Izq className="izq" />
        </button>

      </div>

    </div>
  )
}

export default Carrusel
