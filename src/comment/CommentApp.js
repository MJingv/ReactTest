import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends React.Component {
  state = {
    comments: []
  }

  componentWillMount() {
    this._loadComments();
  }
  componentWillUnmount() {
    clearInterval(this._timer)
  }


  _loadComments = () => {
    let comments = localStorage.comments;

    if (comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
    console.log(this.state.comments);
  }

  _saveComments = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments));
    console.log(localStorage.comments);

  }
  inputChange = (n) => {
    console.log(n);
    this.state.comments.push(n)
    this.setState({comments: this.state.comments})
    this._saveComments(this.state.comments)
  }

  handleDeleteComment = (i) => {
    const comments = this.state.comments
    //删除评论
    comments.splice(i, 1)
    //更新数据comments
    this.setState({comments})
    //保存comments
    this._saveComments(comments)
  }

  render() {

    return (
      <div className="CommentApp-wrap">
        <CommentInput inputChange={this.inputChange}></CommentInput>
        <CommentList commentVal={this.state.comments} onDeleteComment={this.handleDeleteComment}></CommentList>
      </div>
    )

  }

}
