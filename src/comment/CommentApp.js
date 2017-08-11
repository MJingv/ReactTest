import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends React.Component {
  render() {
    return (
      <div className = "CommentApp-wrap">
        <CommentInput></CommentInput>
        <CommentList></CommentList>
      </div>
    )

  }

}
