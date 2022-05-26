import * as React from 'react'
import './MiniProgress.css'
import Proptypes from 'prop-types'

const MiniProgress = ({ width, percent }) => (
  <div className="minipade">
    <div style={{ width: `${(percent * width) / 100}%` }} className="progress2" />
    <div className="progress-div2" style={{ width: `${width - ((percent * width) / 100)}%` }} />
  </div>
)

MiniProgress.propTypes = {
  width: Proptypes.number.isRequired,
  percent: Proptypes.number.isRequired,
}

export default MiniProgress
