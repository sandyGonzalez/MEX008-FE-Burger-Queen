import React from 'react';

const HAMBURGERS = {
  'gula': {
    title: 'Gula',
    price: 50,
    description: 'Es una hamburguesa'
  },
  'malicia': {
    title: 'Malicia',
    price: 55,
    description: 'Es una hamburguesa maliciosa'
  }
};

const Hamburger = ({match}) => {
  // const onClick

  const hamburguer = HAMBURGERS[match.params.id];
  return (<div>
    <h3>{hamburguer.title}</h3>
    <span>Precio: {hamburguer.price}</span>
    <p>{hamburguer.description}</p>

    <button>Agregar Pedido</button>
  </div>)
};


export default Hamburger;