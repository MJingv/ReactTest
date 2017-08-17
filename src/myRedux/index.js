import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';
import reducer from './reducer';
import {createStore} from 'redux';

export default class Index extends React.Component {
inc = () => (
  {type:'ADD'}
)

dec = () => (
  {type:'SUB'}
)

mul = () =>(
  {type:'MUL'}
)

div = () =>(
  {type:'DIV'}
)


componentDidMount() {
  //初始化传递的是reducer
  var store = createStore(reducer);

  console.log(store.getState());

  store.dispatch(this.inc());
  console.log(store.getState());

  store.dispatch(this.dec());
  console.log(store.getState());

  store.dispatch(this.inc());
  console.log(store.getState());

  store.dispatch(this.mul());
  console.log(store.getState());

  store.dispatch(this.mul());
  console.log(store.getState());

  store.dispatch(this.div());
  console.log(store.getState());

}

  render() {
    return (
      <div >
 i am myredux
      </div>
    )

  }

}
