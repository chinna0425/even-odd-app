import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, status: 'Even'}

  onIncrement = () => {
    this.setState(prev => {
      const randval = parseInt(Math.random(0, 1) * 100)
      if (randval % 2 === 0) {
        return {count: randval, status: 'Even'}
      }
      return {count: randval, status: 'Odd'}
    })
  }

  render() {
    const {count, status} = this.state
    return (
      <div className="background-container">
        <h1 className="heading1">Count {count}</h1>
        <p className="paragraph">Count is {status}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
