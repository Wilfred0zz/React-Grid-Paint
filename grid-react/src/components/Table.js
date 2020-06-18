import React from "react";

//Props for table
const Table = ({
    rows,
    cols,
    setColor,
    startColoring,
    stopColoring
}) => 
{
    //Generates table adding rows/cols accordingly. 
    //Each cell is created with color set to white and eventlisteners
    return (
        <table>
            <tbody>
            {Array.from(Array(rows), () => {
                return (
                    <tr>
                        {Array.from(Array(cols), () => {
                            return (
                                <td 
                                style={{backgroundColor: 'white'}}
                                onMouseOver={(cell) => setColor(cell)}
                                onMouseDown={(cell) => startColoring(cell)}
                                onMouseUp={(cell) => stopColoring(cell)}
                                ></td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default Table;
