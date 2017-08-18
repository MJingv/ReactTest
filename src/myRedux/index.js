import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';
import reducer from './reducer';
import {createStore} from 'redux';

//action -- must have a "type"
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());

});

export default class Index extends React.Component {
  state = {
    myShow: -1
  }
  inc = () => ({type: 'ADD'})

  dec = () => ({type: 'SUB'})

  mul = () => ({type: 'MUL'})

  div = () => ({type: 'DIV'})

  componentDidMount() {
    console.log('init ' + store.getState());

  }

  componentWillMount() {
    store.subscribe(() => {
      console.log('will'+store.getState());
      this.setState({
        myShow:store.getState().counter
      })
    });
  }
  addClick = () => {
    store.dispatch(this.inc())
  }
  subClick = () => {
    store.dispatch(this.dec())
  }
  mulClick = () => {
    store.dispatch(this.mul())
  }
  divClick = () => {
    store.dispatch(this.div())
  }

  render() {
    return (
      <div >
        i am myredux -- check the cosole
        <button onClick={this.addClick}>+</button>
        <button onClick={this.subClick}>-</button>
        <button onClick={this.mulClick}>*</button>
        <button onClick={this.divClick}>/</button>
      <h1>结果是这样的{this.state.myShow}</h1>
      </div>
    )

  }

}
