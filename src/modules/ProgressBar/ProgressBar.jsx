import * as React from 'react'
import './ProgressBar.css'
import Proptypes from 'prop-types'

const ProgressBar = ({ width, percent }) => {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    setValue(percent * width)
  }, [])

  return (
    <div>
      <div className="progress-div" style={{ width }}>
        <div style={{ width: `${value}px` }} className="progress" />
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  width: Proptypes.number.isRequired,
  percent: Proptypes.number.isRequired,
}

export default ProgressBar
