import React from 'react';
import './BurgerStyle.css';
import hamburger from '../../img/hamburger.png';

//con props
function BurgerName(props){ //componente 1
  return (
    
    <div className="cuadro">
      <img className="IconBurger" alt={props.name}  src= {hamburger}/> 
    <p className="nameHamburger"> {props.name}</p>
    </div>
   
  )
}

function Burgers() { //componente principal
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
export default Burgers;