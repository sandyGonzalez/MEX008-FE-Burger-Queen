import React from 'react';
import AllTables from '../components/table/tables';
import Toolbar from '../components/sidebar/toolbar/Toolbar';
import './views.css';


class selectTables extends React.Component {
render (){
    return (
    <div>
        <Toolbar />
        <p className="title">Mesas</p>
        <AllTables />
    </div>
    );

}
}
export default selectTables;