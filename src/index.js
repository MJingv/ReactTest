//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.props.onIncreaseClick}>+</button>
        <button onClick={this.props.onDecreaseClick}>-</button>
      </div>

    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

//action
const increaseAction = {
  type: 'increase'
}
const decreaseAction = {
  type: 'decrease'
}

//reducer
function counter(state = {
  count: 0
}, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return {
        count: count + 1
      }
    case 'decrease':
      return {
        count: count - 1
      }

    default:
      return state

  }

}
//store
const store = createStore(counter)

function mapStateToProps(state) {
  return {value: state.count}
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
  }
}
//ReactDOM.render(<App />, document.getElementById('root'));

const App = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(
  <Provider store={store}>
  <App></App>
</Provider>, document.getElementById('root'))
