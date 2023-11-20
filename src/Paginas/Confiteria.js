import React, { useState } from 'react';
import '../App.css';
import Box from "../Componentes/Box";
import combo1 from '../imagenes/1.png';
import combo2 from '../imagenes/2.png';
import combo3 from '../imagenes/3.png';

function Confiteria() {
  const [cart, setCart] = useState([]);

  const combos = [
    {
      name: 'Combo 1',
      image: combo1,
      description: 'Descripción del combo 1',
      price: '$10'
    },
    {
      name: 'Combo 2',
      image: combo2,
      description: 'Descripción del combo 2',
      price: '$20'
    },
    {
      name: 'Combo 3',
      image: combo3,
      description: 'Descripción del combo 3',
      price: '$15'
    }
  ];

  const addToCart = (comboIndex) => {
    const newCart = [...cart];
    newCart[comboIndex] = (newCart[comboIndex] || 0) + 1;
    setCart(newCart);
  };

  const removeFromCart = (comboIndex) => {
    const newCart = [...cart];
    if (newCart[comboIndex] > 0) {
      newCart[comboIndex]--;
    }
    setCart(newCart);
  };

  return (
    <div className='confiteria'>
      <div className='combos'>
        {combos.map((combo, index) => (
          <div key={index} className='combo'>
            <Box
              comboName={combo.name}
              comboImage={combo.image}
              comboDescription={combo.description}
              comboPrice={combo.price}
            />
            <div className='counter'>
              <button className='circle-button' onClick={() => removeFromCart(index)}>-</button>
              <p>{cart[index] || 0}</p>
              <button className='circle-button' onClick={() => addToCart(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className='compra'>
        <div className='carrito'>
          <p>Carrito</p>
          {cart.map((quantity, index) => (
            <p key={index}>
              {combos[index].name} x {quantity} = $ {quantity * Number(combos[index].price.slice(1))}
            </p>
          ))}
        </div>
        <div className='total'>
        <p>Precio total</p>
          {cart.reduce((total, quantity, index) => total + (quantity * Number(combos[index].price.slice(1))),0)}
        </div>
      </div>
    </div>
  );
}

export default Confiteria;




