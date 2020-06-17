import React, { Component } from 'react';
import './App.css';
import {Table,TableRows,TableCells} from './components'

class App extends Component{
  constructor(){
    super();
    this.state={
      rows: 0,
      cols: 1
    }
  }
  addRow = () =>{
    this.setState({rows: this.state.rows+1})
  }
  addCol = () => {
    this.setState({cols: this.state.cols+1})
  }
  removeRow = () =>{
    this.setState({rows: this.state.rows-1})
  }
  removeCol = () => {
    this.setState({cols: this.state.cols-1})
  }
  fillAU = () => {

  }
  fillAll = () =>{

  }

  clear = () =>{}

  render(){
    return(
      <div className="App">
        <button className="addRow" onClick={this.addRow}>Add Row</button>
        <button className="addCol" onClick={this.addCol}>Add Col</button>
        <button className="removeRow" onClick={this.removeRow}>Remove Row</button>
        <button className="removeCol" onClick={this.addcol}>Remove Col</button>
        <button className="fillAllUncolered" onClick="">Fill All Uncolored</button>
        <button className="fillAll" onClick="">Fill All</button>
        <button className="clear" onClick="">Clear</button>
        <select onChange="">
          <option>Select</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
        </select>
      </div>
    )
  }
}

export default App;
