import React from 'react';
import {Link} from 'react-router-dom';


//con props
function menuComponent(){ //componente 1
  return (
    <div>
        <button><Link to="/Hamburgers">Menú principal</Link></button>
    </div>
   
  )
}


export default menuComponent;