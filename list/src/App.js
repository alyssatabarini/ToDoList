import React, { Component } from 'react';
import './App.css';


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  //  this.add = this.add.bind(this);
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  subtract = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  clear = () => {
    this.setState({
      count: 0,
    })
  }

  render() {
    const { count } = this.state;
    return(
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
        <button onClick= {this.clear}>Clear</button>
      </div>
    );
  }
}

export default Counter
