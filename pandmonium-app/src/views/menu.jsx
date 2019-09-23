import React from 'react';
import Menu from '../components/generalMenu/generalMenu.jsx';
import Toolbar from '../components/sidebar/toolbar/Toolbar';


class menu extends React.Component {
render (){
    return (
    <section className="menu">
        <Toolbar />
        <img alt="pandmonium logo" src="../img/demoniumlogo.svg" />
        <Menu />
    </section>
    );

}
}
export default menu;