import React from 'react'
import Proptypes from 'prop-types'
import Book from '../../../assets/book.svg'
import './MiniItem.css'

const MiniItem = ({
  img, title, tipo, sound, bookmark,
}) => {
  if (bookmark) {
    return (
      <div className="miniitemcont">
        <div className="minibase" style={{ backgroundImage: `url(${img})` }} />
        <div className="coso">
          <div className="cosito" />
          <Book className="book" />
        </div>
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
