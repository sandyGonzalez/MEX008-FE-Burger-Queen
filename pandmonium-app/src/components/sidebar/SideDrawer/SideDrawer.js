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
         <li><Link to={'/Menu'}>Historial de Pago</Link></li>
         <li><a href="/">Estadísticas</a></li>
         <li><a href="/">Extras</a></li>
         <li><a href="/">Configuración</a></li>
       </ul>
     </nav>
    );
};

export default SideDrawer;