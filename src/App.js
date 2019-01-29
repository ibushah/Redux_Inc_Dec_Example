import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { abhi } from './Redux/Action/action'

class App extends Component {

  up=()=>
  {
    this.props.increment();
  }
  down=()=>
  {
    this.props.decrement();
  }
  render() {
    console.log(this.props)
    return (
    
      <div className="App">
        <h1>{this.props.num}</h1>
        <button onClick={this.up}>INCR</button>
        <button onClick={this.down}>DEC</button>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    num: state.reducer.num
  }
}

const mapdispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECCREMENT" })
  }
}

export default connect(mapStateToProps, mapdispatchToProps)(App);





