import React from 'react';
import './SideDrawer.scss'
import {Link} from 'react-router-dom';

const SideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if(props.show){
    drawerClasses = ['side-drawer open'];
  }
  return (
    <nav className={drawerClasses.join('')}>
       <ul>
         <li><Link to={'/'}>Mesas</Link></li>
         <li><Link to={'/HistorialDePago'}>Historial de Pago</Link></li>
         <li><Link to={'/Extras'}>Extras</Link></li>
         <li><Link to={'/Hamburguesas'}>Hamburguesas</Link></li>
         
       </ul>
     </nav>
    );
};

export default SideDrawer;