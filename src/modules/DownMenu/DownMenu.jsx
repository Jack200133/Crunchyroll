import React from 'react'
import Proptypes from 'prop-types'
import Down from '../Down/Down.jsx'
import './DownMenu.css'

const DownMenu = ({ activo }) => {
  const contextoo = ['AHAREN-SAN WA HAKARENAI', 'DANCE DANCE DANSEUR',
    'KAGUYA-SAMA: LOVE IS WAR -ULTRA ROMANTIC-',
    'LOVE AFTER WORLD DOMINATION', 'SKELETON KNIGHT IN ANOTHER WORLD', 'SPY x FAMILY']

  return (
    <div className="padre">
      <div className="algo">
        {contextoo.map((index, i) => (<Down text={index} actt={i === activo} />))}
      </div>
    </div>
  )
}

DownMenu.propTypes = {
  activo: Proptypes.bool.isRequired,
}

export default DownMenu
