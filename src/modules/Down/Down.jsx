import React from 'react'
import Proptypes from 'prop-types'
import './Down.css'
import ProgressBar from '../ProgressBar/ProgressBar.jsx'

const Down = ({ text, actt, onClick }) => {
  if (actt) {
    return (
      <button className="containeractive" type="button" onClick={onClick}>
        <ProgressBar className="indicator" width={160} percent={1} />
        <span className="textt">
          {text}
        </span>
      </button>
    )
  }
  return (

    <button className="containertext" type="button" onClick={onClick}>
      <span className="textt">
        {text}
      </span>
    </button>
  )
}

Down.propTypes = {
  text: Proptypes.string.isRequired,
  actt: Proptypes.bool.isRequired,
  onClick: Proptypes.func.isRequired,
}
export default Down
