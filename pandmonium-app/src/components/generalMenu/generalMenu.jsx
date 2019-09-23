import React from 'react';
import '../hamburgers/BurgerStyle.css';
import hamburger from '../../img/hamburger.png';
import pizza from '../../img/pizza.png';
import hotdog from '../../img/jocho.png';
import dessert from '../../img/postre.png'
import salad from '../../img/salad.png';
import drink from './img/bebida.png';


//con props
function menuComponent(props){ //componente 1
  return (
    <div className="burger row">
    <div className="cuadro col-6">
      <img className="IconBurger" alt="f"  src= {props.src}/> 
    </div>
    </div>
   
  )
}

function generalMenu() { //componente principal
  return (
    <div>
      <menuComponent src={hamburger}/>
      <menuComponent src={pizza}/>
      <menuComponent src={hotdog}/>
      <menuComponent src={salad}/>
      <menuComponent src={drink}/>
      <menuComponent src={dessert}/>
      
    </div>
  );
}
export default generalMenu;