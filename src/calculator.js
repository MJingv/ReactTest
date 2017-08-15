import React, { Component } from 'react';


export default class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      val:''
    }
  }
  handleInput = (e)=>{
    let num = e.target.value
    this.setState ({
      val:`${num*100}%`
    })

  }
  render() {
    return(
      <div>

<input type = 'number'  placeholder = "input number" onChange = {this.handleInput}></input>
<p>{this.state.val}</p>
      </div>
    )

  }


}
