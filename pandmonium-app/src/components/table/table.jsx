import React from 'react';

const Table = ({ numbers }) => {
        return ( 
            <div className="table">{numbers}</div>
        )
};

const TableList = ({ list }) => {
    return list.map(table => <Table numbers={table} />);
    
}



export default TableList;