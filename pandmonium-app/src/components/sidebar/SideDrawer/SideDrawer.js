import React from 'react';
import './SideDrawer.css'

const SideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if(props.show){
    drawerClasses = ['side-drawer open'];
  }
  return (
    <nav className={drawerClasses.join('')}>
       <ul>
         <li><a href="/">Mesas</a></li>
         <li><a href="/">Historial de Pago</a></li>
         <li><a href="/">Estadísticas</a></li>
         <li><a href="/">Extras</a></li>
         <li><a href="/">Configuración</a></li>
       </ul>
     </nav>
    );
};

export default SideDrawer;