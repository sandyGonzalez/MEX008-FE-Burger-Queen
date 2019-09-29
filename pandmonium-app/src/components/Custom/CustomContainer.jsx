import React, { Component } from 'react';
import Ingredients from './Ingredients';
import CustomPrice from './CustomPrice';
import './style.scss';

class CustomContainer extends Component {
  render(){
    return(
      <div className="customContainerPrincipal">
        <CustomPrice />
        <Ingredients />
        <div className="buttonOrder">
        <button> Añadir Pedido </button>

        </div>
      </div>
    )
  }
}

export default CustomContainer;