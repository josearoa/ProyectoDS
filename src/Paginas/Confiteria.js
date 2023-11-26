import React, { useState } from 'react';
import '../App.css';
import Box from '../Componentes/Box';
import combo1 from '../imagenes/1.png';
import combo2 from '../imagenes/2.png';
import combo3 from '../imagenes/3.png';

function Confiteria() {
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const combos = [
    {
      name: 'Palomitas Supreme',
      image: combo1,
      description: 'Palomitas con caramelo, nachos y refresco.',
      price: '$3500'
    },
    {
      name: 'Cinema Crunch',
      image: combo2,
      description: 'Palomitas saladas, pretzels y bebida.',
      price: '$5000'
    },
    {
      name: 'Sweet Popcorn Bliss',
      image: combo3,
      description: 'Palomitas dulces, chocolate y refresco.',
      price: '$4000'
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

  const handleCompraComboClick = () => {
    const combosEnCarrito = cart.some(quantity => quantity > 0);
  
    if (combosEnCarrito) {
      setShowAlert(true);
    } else {
      alert("Agrega combos al carrito antes de realizar la compra.");
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
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
        <h1>Detalle de compra</h1>
        {cart.map((quantity, index) => {
          if (quantity > 0) {
            return (
              <p key={index}>
                {combos[index].name} x {quantity} = ${quantity * Number(combos[index].price.slice(1))}
              </p>
            );
          }
          return null; // No mostrar combos con cantidad 0
        })}
      </div>
        <div className='total'>
          <h1>Precio total</h1>
          <div className='valor'>
          ${cart.reduce(
            (total, quantity, index) =>
              total + (quantity > 0 ? quantity * Number(combos[index].price.slice(1)) : 0),
            0
          )}
          </div>
          <div className='mt-3 d-flex justify-content-center'>
          <button type="button" className="btn btn-primary" onClick={handleCompraComboClick}>
            Comprar Combos
          </button>
          </div>
        </div>
      </div>
      {showAlert && (
            <div className="alert alert-success text-center mx-auto" role="alert">
              Su compra de ${cart.reduce((total, quantity, index) => total + (quantity > 0 ? quantity * Number(combos[index].price.slice(1)) : 0), 0)} está siendo procesada. ¡Gracias por elegirnos! Cine Estelar ©
              <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseAlert}></button>
            </div>
          )}
    </div>
    

  );
}

export default Confiteria;




