import React from 'react';
import AllTables from '../components/table/tables';
import Toolbar from '../components/sidebar/toolbar/Toolbar';


class selectTables extends React.Component {
render (){
    return (
    <div>
        <Toolbar />
        <AllTables />
    </div>
    );

}
}
export default selectTables;