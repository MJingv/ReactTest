import React, { Component } from 'react';
import './style.css'

export default class CommentInput extends React.Component {
  state = {
    user:'jehol',
    content:'input sth',

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
  //传给父亲commentApp的内容
  this.props.inputChange({
    user:this.state.user,
    content:this.state.content,
    createTime:+new Date()
  })
  this.setState({
    content:''
  })
}



componentDidMount() {
  this.textarea.focus()
}

componentWillMount() {
  this._loadUsername()
}
_loadUsername = () =>{
  const username = localStorage.user;
  if(username){
    this.setState({
      user:username
    })
  }
}
_saveUsername = (username) =>{
  localStorage.user=username
  console.log(localStorage.user);

}
handleUsernameBlur = (e) =>{

 this._saveUsername(e.target.value)
}
  render() {
    return(

        <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input onBlur = {this.handleUsernameBlur} onChange = {this.handleUser} value = {this.state.user}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea ref = {(textarea) => this.textarea = textarea} value = {this.state.content} onChange = {this.handleContent} />
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
