import React, {Component, PropTypes} from 'react'

export default class AddTodo extends Component {
  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    console.log(text);
    this.props.onAddClick(text)
    node.value = ''
  }

  render() {
    return (
      <div>
        <input type="text" ref="input"></input>
        <button onClick= {(e)=>this.handleClick(e)}>add</button>
      
      </div>
    )
  }

}

AddTodo.propTypes = {}
