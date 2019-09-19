import React from 'react';
import TableList from './table';

function AllTables(){
    return (
        <div className = "allTables">
            <div className = "tablesOrder">
                <TableList
                    list = {[3,4]}
                />
            </div>
            <div className = "tablesOrder">
                <TableList
                    list = {[6,7,8,9,10]}
                />
            </div>
            <div className = "tablesOrder">
                <TableList
                    list = {[1,2]}
                />
            </div>
            <div className = "tablesOrder">
                <TableList
                    list = {[5]}
                />
            </div>
            <div className = "tablesOrder">
                <TableList
                    list = {[11,12,13,14]}
                />
            </div>
            

        </div>
    )
}

export default AllTables;
