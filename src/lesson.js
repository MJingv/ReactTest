import React, {Component} from 'react';

const lessons = [
  {
    title: 'Lesson 1: title',
    description: 'Lesson 1: description'
  }, {
    title: 'Lesson 2: title',
    description: 'Lesson 2: description'
  }, {
    title: 'Lesson 3: title',
    description: 'Lesson 3: description'
  }, {
    title: 'Lesson 4: title',
    description: 'Lesson 4: description'
  }
]

export default class Lesson extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <div>
        {
          lessons.map((item,index) => (

            <LessonsList item = {item} index = {index} key = {index}></LessonsList>
          ))

        }
      </div>
    )
  }
};

class LessonsList extends React.Component {
  constructor() {
    super()
  }
  handleClick = () =>{
    console.log(`${this.props.index} - ${this.props.item.title}`);
  }
  render() {
    const {item} = this.props
    return (
      <div onClick = {this.handleClick} >
        <h1>{item.title}</h1>
        <p>{item.description}</p>

      </div>

    )

  }
}
