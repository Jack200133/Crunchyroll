import React from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Proptypes from 'prop-types'
import './Down.css'
import ProgressBar from '../ProgressBar/ProgressBar.jsx'

const Down = ({ text, actt }) => {
  console.log(actt)
  if (actt) {
    return (
      <button className="containeractive" type="button">
        <ProgressBar className="indicator" width={160} percent={1} />
        <span className="textt">
          {text}
        </span>
      </button>
    )
  }
  return (

    <button className="containertext" type="button">
      <span className="textt">
        {text}
      </span>
    </button>
  )
}

Down.propTypes = {
  text: Proptypes.string.isRequired,
  actt: Proptypes.bool.isRequired,
}
export default Down
