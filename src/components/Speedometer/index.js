import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          className="speedometer"
          alt="speedometer"
        />
        <h1 className="speed">Speed is 0mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <button type="button" className="button-add">
          Accelerate
        </button>

        <button type="button" className="button-subtract">
          Apply brake
        </button>
      </div>
    )
  }
}

export default Speedometer
