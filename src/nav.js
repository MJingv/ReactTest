import React, {Component} from 'react';
import './navStyle.css'

const info = [
  {
    topic: "社区",
    icon: 'x',
    sub: [
      {
        name: '帖子管理',
        title: 'ManageArticle'
      }, {

        name: '评论管理',
        title: 'ManageComment'
      }
    ]
  }, {
    topic: "评论",
    icon: 'x',
    sub: [
      {
        name: 'aaaaaaa'
      }, {
        name: 'bbbbbbb'
      }
    ]

  }, {
    topic: "帖子",
    icon: 'x',
    sub: [
      {
        name: 'cccccccc'
      }, {
        name: 'dddddddd'
      }
    ]
  }
];
export default class Nav extends React.Component {
  state = {
    nowTopic: -1,
    nowSub: -1

  }
  clickSub = (val) =>{
    console.log(val)
    this.setState({
      nowSub:val
    })
  }

  clickTopic = (index) => {
    console.log(index);
    if(index == this.state.nowTopic){
      this.setState({
        nowTopic:-1
      })
    }else{
      this.setState({nowTopic: index})
    }


  }

  render() {
    return (
      <div >
        {info.map((item, index) => (

          <div >
            <div key={index} onClick={this.clickTopic.bind(this, index)} className= {index == this.state.nowTopic ?
                 "navTopic active" : 'navTopic'}>{item.topic + index}</div>
               <ul className ={index == this.state.nowTopic ?'show':''}>
              {item.sub.map((elem, index) => (
                <li key = {`${elem.name}_${index}` } onClick = {this.clickSub.bind(this,`${elem.name}_${index}`)}
                  className = {`${elem.name}_${index}` == this.state.nowSub?'active':''} >{elem.name + index}</li>
              ))
}
            </ul>
          </div>

        ))}

      </div>
    )
  }
}
