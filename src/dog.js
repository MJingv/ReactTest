import React, {Component} from 'react';

export default class Dog extends React.Component {
  constructor() {
    super();
    this.state = {
      isBarking: false,
      isRunning: false,
      now: ''

    }
  }

  handleClick = () => (this.bark(), this.run())

  bark = () => {
    this.setState((prevState) => ({
      now: prevState.now + 'barking --',
      isBarking: true
    }))
    setTimeout(() => this.setState((prevState) => ({
      isBarking: false,
      now: prevState.now + 'stop barking--'
    })), 500)

  }

  run = () => {

    this.setState((prevState) => ({
      now: prevState.now + 'running --',
      isRunning: true
    }))
    setTimeout(() => {
      this.setState((prevState) => ({
        isRunning: false,
        now: prevState.now + 'stop running--'
      }))
    }, 500)

  }
  render() {
    return (
      <div>

        <h1 style={{
          color: "blue"
        }} onClick={this.handleClick}>i am a dog</h1>

        {this.state.now}
    

      </div>

    )
  }
}
