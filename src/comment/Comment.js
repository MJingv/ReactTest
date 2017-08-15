import React, { Component } from 'react';
import '../index.css'
export default class Comment extends React.Component {
state = {
  timeString:'',
  index:-1
}
componentWillMount() {
  this._updateTimeString()
  this._timer = setInterval(this._updateTimeString.bind(this),5000)

}

componentWillUnmount() {
  clearInterval(this._timer)
}


_updateTimeString = () =>{
  const comments = this.props.comment;
  const duration =  (+Date.now() - comments.createTime)/1000;
  this.setState({
    timeString:duration>60?`${Math.round(duration/60)}分钟前`:`${Math.round(Math.max(duration,1))}秒前`
  })
}
handleDeleteComment = () =>{
  this.props.onDeleteComment(this.props.index)
}
_getProcessedContent = (content) =>(
  content
  .replace(/&/g,"&amp;")
  .replace(/</g,"&lt;")
  .replace(/`([\S\s]+?)`/g,'<code>$1</code>')

)
  render() {
    return(
      <div className = 'comment'>
        <div className = 'comment-user'>
          <span className ='comment-username'>{this.props.comment.user}</span>:
        </div>
        <p dangerouslySetInnerHTML = {{__html:this._getProcessedContent(this.props.comment.content)}}></p>
      <span className = "comment-createdtime">{this.state.timeString}</span>
    <span className = "comment-delete" onClick = {this.handleDeleteComment}>删除</span>
      </div>
    )

  }


}
