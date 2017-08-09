import React, {Component} from 'react';
export default class Computer extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
      content:'显示器关了'
    }

  }

  handleClick = () => {
    this.setState({
      status: !this.state.status,

    })
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>电脑 | {this.state.status
            ? 'on'
            : 'off'}</button>
          <Screen screenShow ={ this.state.status}/>

      </div>

      ) } }


      class Screen extends React.Component {constructor(props) {
        super(props);
        this.state = {
          content:'无内容',

        }

      }
      render() {
        return (
          <div>
            <h3 >{this.props.screenShow ? '显示屏亮' : this.state.content} </h3>
          </div>

        )
      }
}
