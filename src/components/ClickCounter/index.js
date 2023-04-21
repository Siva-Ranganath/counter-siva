// Write your code here
import {useState} from 'react'

import './index.css'

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const [boolValue, setBooleanValue] = useState(true)

  const handleClick = () => {
    setCount(count + 10)
  }

  const handleDown = () => {
    setCount(count - 10)
  }

  let counterValue
  if (count < 10) {
    counterValue = `00`
  } else {
    counterValue = count
  }

  const changebackColor = () => {
    setBooleanValue(!boolValue)
  }
  const counterStyle = boolValue ? 'counter-card' : 'counter-card1'
  return (
    <div className="main-background">
      <div className="card-container">
        <div className={counterStyle}>
          <h1>{counterValue}</h1>
          <button
            type="button"
            className="increase-button"
            onClick={handleClick}
          >
            Click to increase counter
          </button>
          <button
            type="button"
            className="increase-button"
            onClick={handleDown}
          >
            Click to decrease counter
          </button>
        </div>
      </div>
      <button
        type="button"
        className="color-change-button"
        onClick={changebackColor}
      >
        Change Color
      </button>
    </div>
  )
}

export default ClickCounter
