import React from 'react'
import Proptypes from 'prop-types'
import Down from '../Down/Down.jsx'
import './DownMenu.css'

const DownMenu = ({ activo, onDownClick }) => {
  const contextoo = ['AHAREN-SAN WA HAKARENAI', 'DANCE DANCE DANSEUR',
    'KAGUYA-SAMA: LOVE IS WAR -ULTRA ROMANTIC-',
    'LOVE AFTER WORLD DOMINATION', 'SKELETON KNIGHT IN ANOTHER WORLD', 'SPY x FAMILY']

  return (
    <div className="padre">
      <div className="algo">
        {contextoo.map((index, i) => (
          // eslint-disable-next-line react/jsx-no-bind
          <Down text={index} actt={i === activo} onClick={onDownClick.bind(null, i)} />))}
      </div>
    </div>
  )
}

DownMenu.propTypes = {
  activo: Proptypes.bool.isRequired,
  onDownClick: Proptypes.func.isRequired,
}

export default DownMenu
