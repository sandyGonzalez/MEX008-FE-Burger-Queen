import React from 'react';
<<<<<<< HEAD:pandmonium-app/src/views/hamburgers.jsx
import Burgers from '../components/Hamburgers/Burgers'
import Toolbar from '../components/sidebar/toolbar/Toolbar';
=======
import Burgers from '../../components/generalMenu/menus/hamburgers/Burgers';
import Toolbar from '../../components/sidebar/toolbar/Toolbar';
>>>>>>> upstream/rama-pandmonium:pandmonium-app/src/views/subviews/Hamburgers.jsx

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