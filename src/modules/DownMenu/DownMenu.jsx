import React from 'react'
import Proptypes from 'prop-types'
import Down from '../Down/Down'
import './DownMenu.css'

const contextoo = ['RASCAL DOES NOT DREAM OF BUNNY GIRL SENPAI', 'AHAREN-SAN WA HAKARENAI',
  'KAGUYA-SAMA: LOVE IS WAR -ULTRA ROMANTIC-',
  'LOVE AFTER WORLD DOMINATION', 'ASCENDANCE OF A BOOKWORM', 'SPY x FAMILY']
const DownMenu = ({ activo, onDownClick }) => (
  <div className="padre">
    <div className="algo">
      {contextoo.map((index, i) => (
        // eslint-disable-next-line react/jsx-no-bind
        <Down text={index} actt={i === activo} onClick={onDownClick.bind(null, i)} />))}
    </div>
  </div>
)

DownMenu.propTypes = {
  activo: Proptypes.bool.isRequired,
  onDownClick: Proptypes.func.isRequired,
}

export default DownMenu
