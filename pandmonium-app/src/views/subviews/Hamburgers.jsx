import React from 'react';

import Burgers from '../../components/generalMenu/menus/hamburgers/Burgers';
import Toolbar from '../../components/sidebar/toolbar/Toolbar';


class BurgersMenu extends React.Component {
    render (){
        return (
        <div>
            <Toolbar />
            <Burgers />
        </div>
        );
    
    }
    }
    export default BurgersMenu;