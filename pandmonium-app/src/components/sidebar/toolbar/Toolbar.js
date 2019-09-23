import React, {Component} from 'react';
// import './SideDrawer/DrawerToggleButton';
import './toolbar.scss';
import SideDrawer from '../SideDrawer/SideDrawer.js';
import HeaderToolbar from './HeaderToolbar.js'
import Backdrop from '../Backdrop/Backdrop.js'


class toolbar extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
     this.setState((prevState) => {
       return{sideDrawerOpen: !prevState.sideDrawerOpen}
     });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

    render() {
      // let sideDrawer;
      let backdrop;
      if(this.state.sideDrawerOpen){
        // sideDrawer = <SideDrawer />;
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }
      return (
        <div style={{height: '100%'}}>
        <HeaderToolbar  drawerClickHandler={this.drawerToggleClickHandler}/>  
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main className="main">
         <p>MESAS</p>
        </main>     
        </div>  
      )
    }
  }


export default toolbar;




