import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DiasSemanaNav = () => {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [mostrarContainer, setMostrarContainer] = useState(false);
  const [cantidadEntradas, setCantidadEntradas] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const ValorEntrada = 3700;

  const handleClick = (dia, hora) => {
    setHorarioSeleccionado({ dia, hora });
    setCantidadEntradas(1);
    setMostrarContainer(true);
  };

  const addToCart = () => {
    setCantidadEntradas(cantidadEntradas + 1);
  };

  const removeFromCart = () => {
    if (cantidadEntradas > 1) {
      setCantidadEntradas(cantidadEntradas - 1);
    }
  };

  const calcularPrecioTotal = () => {
    return ValorEntrada * cantidadEntradas;
  };

  const handleCompraClick = () => {
    // Puedes personalizar el mensaje según tus necesidades
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="horarios-semana">
      <h1>Horarios de la semana</h1>
      <div className='dias-semana'>
        <div className='dia'>
          <h6>Lunes:</h6>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Lunes', '10:00 AM')}>10:00 AM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Lunes', '12:30 PM')}>12:30 PM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Lunes', '3:00 PM')}>3:00 PM</button>
        </div>

        <div className='dia'>
          <h6>Martes:</h6>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Martes', '9:00 AM')}>9:00 AM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Martes', '11:30 AM')}>11:30 AM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Martes', '2:30 PM')}>2:30 PM</button>
        </div>
        <div className='dia'>
          <h6>Miércoles:</h6>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Miércoles', '10:30 AM')}>10:30 AM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Miércoles', '1:00 PM')}>1:00 PM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Miércoles', '4:00 PM')}>4:00 PM</button>
        </div>
        <div className='dia'>          
          <h6>Jueves:</h6>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Jueves', '8:45 AM')}>8:45 AM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Jueves', '12:00 PM')}>12:00 PM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Jueves', '3:15 PM')}>3:15 PM</button>
        </div>
        <div className='dia'>
          <h6>Viernes:</h6>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Viernes', '11:00 AM')}>11:00 AM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Viernes', '1:45 PM')}>1:45 PM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Viernes', '4:30 PM')}>4:30 PM</button>
        </div>
        <div className='dia'>
          <h6>Sábado:</h6>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Sábado', '9:30 AM')}>9:30 AM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Sábado', '12:15 PM')}>12:15 PM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Sábado', '3:45 PM')}>3:45 PM</button>
        </div>
        <div className='dia'>
          <h6>Domingo:</h6>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Domingo', '10:45 AM')}>10:45 AM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Domingo', '2:00 PM')}>2:00 PM</button>
          <button type="button" className="hora btn btn-sm btn-outline-secondary" onClick={() => handleClick('Domingo', '5:15 PM')}>5:15 PM</button>
        </div>
        </div>
        {mostrarContainer && (
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-white text-center">
                Entradas para {horarioSeleccionado.dia} a las {horarioSeleccionado.hora}
              </h2>
              <div className="d-flex align-items-center justify-content-center">
                <button className='btn btn-primary mr-2' onClick={removeFromCart}>-</button>
                <p className="mb-0 mx-4">{cantidadEntradas}</p>
                <button className='btn btn-primary ml-2' onClick={addToCart}>+</button>
              </div>
              <p className="mt-3 text-center">Monto total: ${calcularPrecioTotal()}</p>
            </div>
          </div>
        </div>
      )}
      {horarioSeleccionado && (
        <div className="mt-4 d-flex justify-content-center">
          <button type="button" className="btn btn-primary" onClick={handleCompraClick}>
            Comprar Entrada para {horarioSeleccionado.dia} a las {horarioSeleccionado.hora}
          </button>
        </div>
      )}
      {showAlert && (
          <div className="alert alert-success mt-3 mb-4 mx-4" role="alert">
          Su compra de ${calcularPrecioTotal()} está siendo procesada. ¡Gracias por elegirnos! Cine Estelar ©
          <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseAlert}></button>
        </div>
      )}
    </div>
  );
};

export default DiasSemanaNav;