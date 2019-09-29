import React, { Component } from 'react';
import Ingredients from './Ingredients';
import CustomPrice from './CustomPrice';
import './style.scss';

class CustomContainer extends Component {
  render(){
    return(
      <div>
        <CustomPrice />,
        <Ingredients />,
        <button> Añadir Pedido </button>
      </div>
    )
  }
}

export default CustomContainer;