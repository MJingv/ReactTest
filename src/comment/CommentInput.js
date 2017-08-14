import React, { Component } from 'react';
import './style.css'

export default class CommentInput extends React.Component {
  state = {
    user:'jehol',
    content:'no content'
  }

  handleUser = (e) => (

    this.setState({
      user:e.target.value
    })
  )

  handleContent = (e) => (

    this.setState({
      content:e.target.value
    })
  )
handleClick = () =>{
  this.props.inputChange({
    myUser:this.state.user,
    myContent:this.state.content
  })
}


  render() {
    return(

        <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input onChange = {this.handleUser}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea  onChange = {this.handleContent} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick = {this.handleClick}>
            发布
          </button>
        </div>
      </div>

    )

  }


}
