import React from 'react';
import './BurgerStyle.css';
import hamburger from './img/hamburger.png';

//con props
function BurgerName(props){ //componente 1
  return (
    <div className="burger row">
    <div className="cuadro col-6">
      <img className="IconBurger" alt={props.name}  src= {hamburger}/> 
    <p className="nameHamburger"> {props.name}</p>
    </div>
    </div>
   
  )
}

function Burger() { //componente principal
  return (
    <div>
      <BurgerName name="Gula"/>
      <BurgerName name="Malicia" />
      <BurgerName name="Soberbia" />
      <BurgerName name="Alma en pena" />
      <BurgerName name="Encarnación" />
      <BurgerName name="Banana limbo" />
      
    </div>
  );
}
export default Burger;