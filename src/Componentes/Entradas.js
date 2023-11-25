import React, { useState } from 'react';

const Entradas = ({ horarioSeleccionado }) => {
  const [cantidadEntradas, setCantidadEntradas] = useState(0);

  const handleIncrement = () => {
    setCantidadEntradas(cantidadEntradas + 1);
  };

  const handleDecrement = () => {
    if (cantidadEntradas > 0) {
      setCantidadEntradas(cantidadEntradas - 1);
    }
  };

  return (
    <div className="entradas">
      <h2>Entradas</h2>
      <p>Horario seleccionado: {horarioSeleccionado}</p>
      <div className="cantidad-entradas">
        <button onClick={handleDecrement}>-</button>
        <span>{cantidadEntradas}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className="btn-agregar">Agregar al carrito</button>
    </div>
  );
};

export default Entradas;
