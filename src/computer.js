import React from 'react';

const info = [
  {user:'jehol',age:21,sex:'F'},
  {user:'tom',age:44,sex:'M'},
  {user:'lucy',age:3,sex:'F'},
  {user:'mark',age:99,sex:'M'},

]

export default class Computer extends React.Component {
  constructor() {

    super()
  }

render(){
  return(
    <div>
      {info.map((item,index) => <List key={index} item = {item} ></List>)}
    </div>
  )
}
}

class List extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    const {item }= this.props
    return(
      <div>
        <ul>

          username:  {item.user}


          useraage:  {item.age}


          usersex:  {item.sex}
        <hr></hr>
        </ul>
      </div>
    )
  }
}
