import React from 'react';
import Menu from '../components/generalMenu/generalMenu';
import Toolbar from '../components/sidebar/toolbar/Toolbar';




class ViewMenu extends React.Component {
    render (){
        return (
        <div>
            <Toolbar />
            <Menu />
        </div>
        );
    
    }
    }
    export default ViewMenu;