import React, {Component,PropTypes} from 'react';
import Header from './Header';
import {Provider} from './react-redux';

import Content from './Content'
import ReactDOM from 'react-dom'

function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)

export default class Index extends React.Component {



  render() {
    return (
      <div>
      <Header></Header>
      <Content></Content>

    </div>
    )

  }

}
