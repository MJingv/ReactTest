import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Dog from './dog';
import Computer from './computer';
import Lesson from './lesson';
import CommentApp from './comment/CommentApp'
import Nav from './nav'
import Calculator from './calculator'

import Index from './myRedux/index'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myChoice: true,
      val: 'jehol',
      value: '3',
      father: '',
      num: [
        3, 2
      ],
      count: 0,
      myObj: {
        name: 'jehol',
        age: 21,
        sex: 'f'
      }

    }
  }
  handleChange(e) {
    this.setState({value: e.target.value});

  }
  change(e) {
    this.setState({father: e.target.value})
  }

  changeBro() {
    this.setState({father: "i am brother"})
  }

  changeMe(n) {

    console.log(n.a + '我的宝贝');
    this.setState({val: 'hhhhhh'})

  }

  addBtn = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  handleClick = () => {
    const myObj = {
      name: 'jehol',
      age: 21,
      sex: 'f'
    }
    const arr = [11, 22, 33, 44, 55]

    const myArr = [];

    myArr.push(Object.keys(myObj));

    console.log(myArr);
  }



  render() {
    const num = [1, 2, 3, 4];
    const yes = <strong>i am yes</strong>;
    const no = <strong>i am no</strong>;
    return (

      <div className="App-game">
        <div className="leftNav">
          <Nav></Nav>
        </div>
        <div className="content">
          <CommentApp ></CommentApp>
        <Index></Index>


        </div>

        {/* <Child myVal={this.state.val} change={this.changeMe.bind(this)}></Child> */}
        {/* <select onChange={this.handleChange.bind(this)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option selected value="3">3</option>
          <option value="4">4</option>
        </select>
        <p>the seleted optiong is {this.state.value}
        </p>
        <ul>{num.map((item, index) => (
            <li key={index}>
              {`${item * this.state.value}`}
            </li>
          ))
        }
        </ul>
        <h1>
          {this.state.myChoice
            ? yes
            : no
          }
        </h1>
        <button onClick={this.addBtn}>add 1</button>
        {`now the count is ${this.state.count}`} */}

        {/* <Dog/>

        <Computer/ >

        <Lesson></Lesson> */}

      </div>

    );
  }
}

// class BlackBorderContainer extends React.Component {
// render(){
//   return(
//     <div >
//
//         {this.props.children.map((item,index)=>(
//           <div key= {index} className = 'father'>{item}</div>
//         ))}
//
//
//     </div>
//
//   )
// }
// }
//         class Child extends React.Component {constructor(props) {
//           super(props)
//
//         }
//
//         handleClick = () => this.props.change({a: 1})
//
//         render() {
//           return (
//             <div>
//               <p>i am child</p>
//               <h1>{this.props.myVal}</h1>
//               <button onClick={this.handleClick}>
//                 click me to change father</button>
//
//           </div>
//     )
//   }
//
// }

// class Test extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       userName: "1"
//     }
//
//   }
//
//   render() {
//     const no = ["jehol", "a", "bbb"]
//     return (
//       <div>
//         <input placeholder="input sth " onChange={this.props.value}></input>
//         <ul>
//           {this.props.myNum.map((item, index) => {
//
//             return <li key={index}>{item}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// class Brother extends React.Component {
//   constructor(props) {
//     super(props)
//
//   }
//   render() {
//     return (
//       <button onClick={this.props.brother}>我要改变兄弟test的值</button>
//     )
//   }
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     }
//   }
//   componentDidMount() {
//     this.timerID = setInterval((() => {
//       this.setState({date: new Date()})
//     }), 1000)
//
//   }
//   componentWillMount() {
//     clearInterval(this.timerID);
//
//   }
//
//   render() {
//     return (
//       <div>
//
//         <h3>{this.state.date.toLocaleTimeString()}</h3>
//       </div>
//     )
//   }
// }
//
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }
//
// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }
//
// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }
//
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
//
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };
//
// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   handleChange(e) {
//     {/*this.setState({temperature: e.target.value})*/
//     }
//     this.props.onTemperatureChange(e.target.value)
//   }
//   render() {
//     return (
//       <div>
//         <fieldset>
//           <legend>{`temperature ${scaleNames[this.props.scale]} information`}</legend>
//           输入摄氏度:
//           <input value={this.props.temperature} onChange={this.handleChange.bind(this)}/>
//         </fieldset>
//       </div>
//     )
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       temperature: '',
//       scale: 'c'
//     }
//   }
//
//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }
//
//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }
//
//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f'
//       ? tryConvert(temperature, toCelsius)
//       : temperature;
//     const fahrenheit = scale === 'c'
//       ? tryConvert(temperature, toFahrenheit)
//       : temperature;
//     return (
//       <div>
//         <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange.bind(this)}/>
//         <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange.bind(this)}/>
//         <BoilingVerdict celsius={parseFloat(celsius)}/>
//       </div>
//     )
//
//   }
// }
