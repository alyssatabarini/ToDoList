import React, { Component } from 'react';
import List from './List';
// import './ToDo.css';

class ToDo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count: 0,
      term:'',
      items: []
    }
  }


  onChange = (event) => {
    this.setState({term: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      count: this.state.count + 1,
      term:'',
      items: [...this.state.items, this.state.term]
    })
  }



  render() {
    return(
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
          </form>
          <List items={this.state.items} />
          <h1> {this.state.cout} </h1>
          <p>{this.state.count} </p>
      </div>
    )
  }
}

export default ToDo;
