import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//basic dom render
ReactDOM.render(<App />, document.getElementById('root'));

//todolist
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import TodoList from './todoList/container/App'
// import todoApp from './todoList/reducer.js'
//
// let store = createStore(todoApp)
//
// let rootElement = document.getElementById('root')
//
// ReactDOM.render(
//   <Provider store = {store}>
//     <TodoList />
// </Provider>,
// rootElement
// )

// import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom'
// import {createStore} from 'redux'
// import {Provider, connect} from 'react-redux'
// import {composeWithDevTools} from 'redux-devtools-extension';
//
// class Counter extends Component {
//
//   handleInput = (e) => {
//     let data = e.target.value
//     console.log(data);
//     this.props.onInputChange(data)
//   }
//
//   render() {
//
//     return (
//       <div>
//         <h2>welcome to jehol's channel</h2>
//         <h1>the change is {this.props.value}</h1>
//         <button onClick={this.props.onIncreaseClick}>+</button>
//         <button onClick={this.props.onDecreaseClick}>-</button>
//         <input onChange={this.handleInput}></input>
//         <div>{this.props.data}</div>
//       </div>
//
//     )
//   }
// }
//
// Counter.propTypes = {}
//
// //action
// const increaseAction = {
//   type: 'increase'
// }
// const decreaseAction = {
//   type: 'decrease'
// }
// const inputChangeAction = (data) => ({data, type: 'inputChange'})
//
// //reducer
// function counter(state = {
//   count: 1,
//   data: ''
// }, action) {
//   let count = state.count;
//   switch (action.type) {
//     case 'increase':
//       return {
//         ...state,
//         count: count + 1
//       }
//     case 'decrease':
//
//       return {
//         ...state,
//         count: count - 1
//       }
//     case 'inputChange':
//       return {
//         ...state,
//         data: action.data
//       }
//
//     default:
//
//       return state
//
//   }
// }
// //store
// //const store = createStore(counter)
//
// const store = createStore(counter, composeWithDevTools(
// //  applyMiddleware(...middleware),
// // other store enhancers if any
// ))
//
// function mapStateToProps(state) {
//
//   return {value: state.count, data: state.data}
// }
//
// function mapDispatchToProps(dispatch) {
//
//   return {
//     onIncreaseClick: () => dispatch(increaseAction),
//     onDecreaseClick: () => dispatch(decreaseAction),
//     onInputChange: (data) => dispatch(inputChangeAction(data))
//   }
// }
//
// const App = connect(mapStateToProps, mapDispatchToProps)(Counter)
//
// ReactDOM.render(
//   <Provider store={store}>
//   <App></App>
// </Provider>, document.getElementById('root'))
