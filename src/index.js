import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { count: 0 };

  updateCount = (plusMinus) => {
    if (plusMinus === "+") {
      this.setState(prevState => ({ count: prevState.count + 1 }))
    } else {
      this.setState(prevState => ({ count: prevState.count - 1 }))
    }
  }

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} />
        <Counter count={this.state.count} updateCount={this.updateCount} />
      </div>
    );
  }
}

class Header extends Component {

  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.updateCount("-")}> - </button>
        <button onClick={() => this.props.updateCount("+")}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
