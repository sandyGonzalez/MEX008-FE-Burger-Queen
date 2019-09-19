import React from 'react';
import TableStyles from './table.css'

const Table = ({ numbers }) => {
        return ( 
            <div style={TableStyles}>{numbers}</div>
        )
};

const TableList = ({ list }) => {
    return list.map(table => <Table numbers={table} />);
}



export default TableList;