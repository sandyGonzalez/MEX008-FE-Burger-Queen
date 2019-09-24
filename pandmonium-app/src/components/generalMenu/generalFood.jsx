import React from 'react';
import './menus/FoodStyle.css';


function Food(props){ //componente 1
    return (
      <div className="cuadro">
        <img className="IconFood" alt={props.name}  src= {props.icon}/>
      </div>
  
    );
  }

  export default Food;

  