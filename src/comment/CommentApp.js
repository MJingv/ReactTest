import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends React.Component {
state = {
  myUser:'app',
myContent:'no content'
}

  inputChange = (n) =>{
    console.log(n);
  this.setState({
    myUser:n.myUser,
    myContent:n.myContent
  })

  }

  render() {

    return (
      <div className = "CommentApp-wrap">
        <CommentInput inputChange = {this.inputChange}></CommentInput>
      <CommentList userVal = {this.state.myUser} contentVal = {this.state.myContent}></CommentList>
      </div>
    )

  }

}
