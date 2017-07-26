import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '3'
    }
  }
  handleChange(e) {
    this.setState({value: e.target.value});

  }

  render() {
    const num = [1, 2, 3, 4];

    return (
      <div className="App game">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome jehol to React</h2>
        </div>
        <select onChange={this.handleChange.bind(this)}>
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
        <Clock></Clock>
        <Calculator></Calculator>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval((() => {
      this.setState({date: new Date()})
    }), 1000)

  }
  componentWillMount() {
    clearInterval(this.timerID);

  }
  component
  render() {
    return (
      <div>

        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    )
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(e) {
    {/*this.setState({temperature: e.target.value})*/
    }
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>{`temperature ${scaleNames[this.props.scale]} information`}</legend>
          输入摄氏度:
          <input value={this.props.temperature} onChange={this.handleChange.bind(this)}/>
        </fieldset>
      </div>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f'
      ? tryConvert(temperature, toCelsius)
      : temperature;
    const fahrenheit = scale === 'c'
      ? tryConvert(temperature, toFahrenheit)
      : temperature;
    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange.bind(this)}/>
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange.bind(this)}/>
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    )

  }
}
