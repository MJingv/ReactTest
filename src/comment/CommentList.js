import React, { Component } from 'react';


export default class CommentList extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    return(
      <div>
        {this.props.userVal} : {this.props.contentVal}
      </div>
    )

  }


}
