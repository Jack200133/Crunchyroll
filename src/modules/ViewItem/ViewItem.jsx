import React from 'react'
import Proptypes from 'prop-types'
import Play from '../../../assets/play.svg'
import Comm from '../../../assets/comments.svg'
import Rel from '../../../assets/relod.svg'
import MiniProgress from '../MiniProgressBar/MiniProgress.jsx'
import './ViewItem.css'

const Viewitem = ({
  img, title, episode, sound, coments, time, total,
}) => {
  if (time === 0) {
    return (
      <div className="player-card">
        <div className="img-card" id="coso" style={{ backgroundImage: `url(${img})` }}>
          <div className="mica" />
          <Rel className="reicon" />
          <Play className="unreicon" />
          <div className="time">
            Visto
          </div>
          <div className="untime">
            {Math.round(total)}
            m
          </div>
        </div>
        <div className="text-card">
          <small className="tittu">{title}</small>
          <span className="tope">{episode}</span>
          <div className="foot2">
            <span className="sub2">{sound}</span>
            <div className="minifoot">
              <span className="comm">{coments}</span>
              <Comm className="commicon" />
            </div>
          </div>
        </div>

      </div>
    )
  }
  return (
    <div className="player-card">
      <div className="img-card" style={{ backgroundImage: `url(${img})` }}>
        <div className="img-card-container">
          <Play className="reicon" />
          <div className="time">
            {time}
            m restantes
          </div>

        </div>
        <MiniProgress className="progre" width={100} percent={100 - ((time * 100) / total)} />
      </div>
      <div className="text-card">
        <small className="tittu">{title}</small>
        <span className="tope">{episode}</span>
        <div className="foot2">
          <span className="sub2">{sound}</span>
          <div className="minifoot">
            <span className="comm">{coments}</span>
            <Comm className="commicon" />
          </div>
        </div>
      </div>

    </div>
  )
}

Viewitem.propTypes = {
  img: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  episode: Proptypes.string.isRequired,
  sound: Proptypes.string.isRequired,
  coments: Proptypes.number.isRequired,
  time: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
}

export default Viewitem
