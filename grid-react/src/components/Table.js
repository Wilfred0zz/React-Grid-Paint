import React, { Component } from 'react';
import TableRows from './TableRows';

class Table extends Component{
    constructor(props){
        super(props);
    }
    Rows = () => {
        let allrows =[];
        for(let i = 0; i<this.props.rows; i++){
            allrows.push(<TableRows cols = {this.props.cols} />);//for the amount of rows apparent it will call the table rows that will make a new tr
        }
        return allrows;
    }
    render(){
        return(
        <table>
            <tbody>
            {this.Rows()}
            </tbody>
        </table>)
    }
}

export default Table;