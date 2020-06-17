import React, { Component } from 'react';
import TableCells from './TableCells'

class TableRows extends Component{
    constructor(props){
        super(props);
    }
    fillwithCols = () => {
        let allcols = [];
        for(let i = 0; i<this.props.cols; i++){
            allcols.push(<TableCells rows={this.props.cols} />)//when a tr is generated makes call to create the td for the cols/cells
        }
        return allcols;
    }
    render(){
        return(
                <tr>
                    {this.fillwithCols()}
                </tr>
        )
    }
}

export default TableRows;