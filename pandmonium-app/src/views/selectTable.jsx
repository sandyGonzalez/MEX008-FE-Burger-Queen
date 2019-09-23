import React from 'react';
import AllTables from '../components/table/tables';
import Toolbar from '../components/sidebar/toolbar/Toolbar';
import styles from '../components/table/table.scss'


class selectTables extends React.Component {
render (){
    return (
    <div>
        <Toolbar />
        <AllTables styles />
    </div>
    );

}
}
export default selectTables;