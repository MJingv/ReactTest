import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TodoList from './todoList/container/App'
import todoApp from './todoList/reducer.js'

let store = createStore(todoApp)

let rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store = {store}>
    <TodoList />
</Provider>,
rootElement
)
