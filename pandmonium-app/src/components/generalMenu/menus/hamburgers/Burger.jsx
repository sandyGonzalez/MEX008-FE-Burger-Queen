import React from 'react';
import '../FoodStyle.scss';
import hamburger from '../../img/hamburger.png';

//con props
function BurgerName(props){ //componente 1
  return (

    <div className="cuadro">
      <img className="IconFood" alt={props.name}  src= {hamburger}/>
    <p className="nameFood"> {props.name}</p>
    </div>

  )
}

function Burger() { //componente principal
  return (
    <div className= "container-food">
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
