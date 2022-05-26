import React from 'react'
import Proptypes from 'prop-types'
import MiniItem from '../MiniItem/MiniItem.jsx'

import './MiniContainer.css'

const MiniContainer = ({ datos }) => {
  const contextoo = [...datos]
  return (
    <div className="minicontainer">
      <div className="algo2">
        {contextoo.map((index) => (
          <MiniItem
            img={index.img}
            title={index.title}
            tipo={index.tipo}
            sound={index.sound}
            bookmark={index.bookmark}
          />
        ))}
      </div>
    </div>
  )
}

MiniContainer.propTypes = {
  datos: Proptypes.arrayOf(Proptypes.shape({
    img: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    tipo: Proptypes.string.isRequired,
    sound: Proptypes.string.isRequired,
    bookmark: Proptypes.bool.isRequired,
  })).isRequired,
}

export default MiniContainer
