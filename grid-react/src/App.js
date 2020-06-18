import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Table from './components/Table'

class App extends Component{
  constructor(){
    super();
    this.state={
      rows: 0,
      cols: 0,
      color: 'white',
      mouseDown: false
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

  //Removes rows
  removeRow = () => {
    //If there are no rows, alert user
    if (this.state.rows === 0)
      alert("No rows to remove")
    //If this is the last row to remove, reset to empty table
    else if (this.state.rows === 1)
      this.setState({ rows: 0, cols: 0 })
    else
      this.setState({ rows: this.state.rows - 1 })
  }

  removeCol = () => {
    //If there are no columns, alert user
    if (this.state.cols === 0)
      alert("No columns to remove")
    //If this is the last column to remove, reset to empty table
    else if (this.state.cols === 1)
      this.setState({ rows: 0, cols: 0 })
    else
      this.setState({ cols: this.state.cols - 1 })
  }

  //Uses ReactDOM to select the table, then tablebody, and the tr's contained within it.
  //Then iterates through each row and its cells, checking if their color is white
  //If it is white, we replace it with the currently selected color.
  fillAU = () => {
    let table = ReactDOM.findDOMNode(this).childNodes[8].childNodes[0].childNodes;
    for(let i = 0; i < this.state.rows; i++){
      for(let j = 0; j < this.state.cols; j++){
        if(table[i].childNodes[j].style.backgroundColor === "white")
        table[i].childNodes[j].style.backgroundColor = this.state.color;
      }
    }
  }

  //Sets color of all cells to the selected color
  fillAll = () =>{
    let table = ReactDOM.findDOMNode(this).childNodes[8].childNodes[0].childNodes;
    for(let i = 0; i < this.state.rows; i++){
      for(let j = 0; j < this.state.cols; j++)
        table[i].childNodes[j].style.backgroundColor = this.state.color;
    }
  }

  //Sets color of all cells to white
  clear = () =>{
    let table = ReactDOM.findDOMNode(this).childNodes[8].childNodes[0].childNodes;
    for(let i = 0; i < this.state.rows; i++){
      for(let j = 0; j < this.state.cols; j++)
        table[i].childNodes[j].style.backgroundColor = "white";
    }
  }

  //Sets the color to the passed event target's value.
  selectColor = (selection) => {
    this.setState({ color: selection.target.value })
  }

  //When the mouse is clicked and held, colors the clicked cell
  startColoring = (cell) => {
    this.setState({ mouseDown: true })
    cell.target.style.backgroundColor = this.state.color;
  }

  //Stops coloring hovered cells once mouse is no longer held down
  stopColoring = (cell) => {
    this.setState({ mouseDown: false })
  }

  //If the mouse is held down, color any hovered cells.
  setColor = (cell) => {
    if (this.state.mouseDown === true)
        cell.target.style.backgroundColor = this.state.color;
  }


  //Generate the buttons and dropdown menu
  //Pass states and functions from App component to Table
  render(){
    return(
      <div className="App">
        <button className="addRow" onClick={this.addRow}>Add Row</button>
        <button className="addCol" onClick={this.addCol}>Add Col</button>
        <button className="removeRow" onClick={this.removeRow}>Remove Row</button>
        <button className="removeCol" onClick={this.removeCol}>Remove Col</button>
        <button className="fillAllUncolered" onClick={this.fillAU}>Fill All Uncolored</button>
        <button className="fillAll" onClick={this.fillAll}>Fill All</button>
        <button className="clear" onClick={this.clear}>Clear</button>
        <select onChange={this.selectColor}>
          <option value="White">White</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
        </select>
        <Table rows={this.state.rows} 
            cols={this.state.cols}
            color={this.state.color}
            startColoring={this.startColoring}
            stopColoring={this.stopColoring}
            setColor={this.setColor}
            />
      </div>
    )
  }
}

export default App;
