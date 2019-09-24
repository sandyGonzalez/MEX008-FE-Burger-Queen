import React from 'react';
// import {Link} from 'react-router-dom';
import FoodMenu from './generalFood';

import './menus/FoodStyle.css';
import hamburger from './img/hamburger.png';
import pizza from './img/pizza.png';
import jocho from './img/jocho.png';
import salad from './img/salad.png';
import drink from './img/bebida.png';
import dessert from './img/postre.png';



//con props
function menuComponent(){ //componente 1
  return (
    <div>
        <FoodMenu name="principal-hamburger" icon={hamburger} />
        <FoodMenu name="principal-pizza" icon={pizza} />
        <FoodMenu name="principal-jocho" icon={jocho} />
        <FoodMenu name="principal-salad" icon={salad} />
        <FoodMenu name="principal-bebida" icon={drink} />
        <FoodMenu name="principal-postre" icon={dessert} />
    </div>
  )
}


export default menuComponent;

 
  
  
  
  