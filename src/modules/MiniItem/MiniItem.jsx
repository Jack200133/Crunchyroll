import React from 'react'
import Proptypes from 'prop-types'
import './MiniItem.css'

const MiniItem = ({
  img, title, tipo, sound, bookmark,
}) => {
  console.log(img, title, tipo, sound, bookmark)

  return (
    <div className="miniitemcont">
      <div className="minibase" style={{ backgroundImage: `url(${img})` }} />
      <div className="minnbase">
        <h4>{title}</h4>
        <div className="foot">
          <span className="type">{tipo}</span>
          <span className="sub">{sound}</span>
        </div>
      </div>

    </div>
  )
}

MiniItem.propTypes = {
  img: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  tipo: Proptypes.string.isRequired,
  sound: Proptypes.string.isRequired,
  bookmark: Proptypes.bool.isRequired,
}

export default MiniItem
