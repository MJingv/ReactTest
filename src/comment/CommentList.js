import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props)
  }

handleDeleteComment = (index) =>{
  this.props.onDeleteComment(index)
}


  render() {
    return (
      <div>
        {this.props.commentVal.map((item, index) => (
          <Comment key = {index} index = {index} comment = {item}
          onDeleteComment = {this.handleDeleteComment} />
        ))}
      </div>
    )

  }

}
