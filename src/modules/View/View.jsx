import React, { useState, cloneElement } from 'react'
import './View.css'
import Izq from '../../../assets/arrowizq.svg'
import Viewitem from '../ViewItem/ViewItem'
import t1 from '../../../assets/viendo/cuckos.jpeg'
import t2 from '../../../assets/viendo/kaguya.jpeg'
import t3 from '../../../assets/viendo/spy.jpeg'
import t4 from '../../../assets/viendo/tomo.jpeg'

const m1 = {
  img: t1,
  title: 'A COUPLE OF CUCKOOS',
  episode: 'T1 E5 - Episodio 5',
  sound: 'Subtitulado',
  coments: 123,
  time: 12,
  total: 24.10,
}
const m2 = {
  img: t3,
  title: 'SPY X FAMILY',
  episode: "T1 E1 - Operacion 'Strix' ",
  sound: 'Doblajes',
  coments: 595,
  time: 22,
  total: 24.10,
}
const m3 = {
  img: t2,
  title: 'KAGUYA-SAMA: LOVE IS WAR',
  episode: 'T3 E7 - Miko Iino no puede amar',
  sound: 'Subtitulado',
  coments: 286,
  time: 0,
  total: 24.10,
}
const m4 = {
  img: t4,
  title: 'TOMODACHI GAME',
  episode: 'T1 E7 - Me quedo con tu vida por el valor de 20 000 000 yenes',
  sound: 'Subtitulado',
  coments: 146,
  time: 0,
  total: 22.10,
}
const data = [m2, m1, m3, m4]
const View = () => (
  <div className="containerMini">
    <div className="box">
      <h2> Seguir viendo</h2>
      <button type="button" className="iconizq2">
        <Izq className="izq" />
      </button>
    </div>
    <div className="bgradient" />
    <div className="viendos">
      {data.map((index) => (
        <Viewitem
          img={index.img}
          title={index.title}
          episode={index.episode}
          sound={index.sound}
          coments={index.coments}
          time={index.time}
          total={index.total}
        />
      ))}
    </div>
  </div>
)

export default View
