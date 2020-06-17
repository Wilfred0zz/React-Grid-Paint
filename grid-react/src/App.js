import React, { Component } from 'react';
import './App.css';
import {Table} from './components'

class App extends Component{
  constructor(){
    super();
    this.state={
      rows: 0,
      cols: 0,
    }
  }

  addRow = () =>{ //adds to track of rows apparent to number of clicks.
    let {rows, cols} = this.state;
    let fixRows = rows + 1;//fixed if cols has one to create a td if rows has none
    if (cols === 0) {
      this.setState({ rows: fixRows, cols: cols + 1});
    } else {
      this.setState({rows: fixRows});//if already is col will create same amount of cols for each.
    }
  }


  addCol = () => {//adds to track of cols apprent to number of clicks
    let {rows, cols} = this.state;
    let fixCols = cols + 1;
    if (rows === 0) {
      this.setState({cols:fixCols, rows:rows + 1});//fixed if the user clicks cols first and there is no tr which is needed first to generate cell.
    } else {
      this.setState({cols:fixCols});//if there already is a fixed amount of rows it will create a col for each row
    }
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
        <Table rows={this.state.rows} cols={this.state.cols}></Table>
      </div>
    )
  }
}

export default App;
