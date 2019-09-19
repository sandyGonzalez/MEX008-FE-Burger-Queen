import React from 'react';
import TableList from './table';

function AllTables(){
    return (
        <div className = "AllTables">
          <TableList
           list = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
           />
          </div>
    )
}

export default AllTables;
