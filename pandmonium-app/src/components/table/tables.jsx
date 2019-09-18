import React from 'react';
import TableList from './table';

function AllTables(){
    return (
        <div className = "AllTables">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <TableList
           list = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
           />
          </div>
    )
}


const RootElement = document.getElementById("root");
ReactDOM.render(<AllTables/>,RootElement);