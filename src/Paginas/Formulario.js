import React, { useState } from 'react';
import logo_mini from '../imagenes/logo_mini.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ComplaintForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form
            method="POST"
            className="w-100 rounded p-4 border bg-white"
            action="https://herotofu.com/start"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center mb-3">Formulario de reclamo <span><img src={logo_mini} className='form-img' alt='hola'/></span></h3>
            
            <label className="d-block mb-4">
              <span className="form-label d-block">Tu nombre</span>
              <input
                name="name"
                type="text"
                className="form-control"
                required
              />
            </label>

            <label className="d-block mb-4">
              <span className="form-label d-block">Tu correo electrónico</span>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </label>

            <label className="d-block mb-4">
              <span className="form-label d-block">Tu boleta</span>
              <input name="receipt" type="file" className="form-control" />
            </label>

            <label className="d-block mb-4">
              <span className="form-label d-block">Comentanos tu reclamo</span>
              <textarea
                name="message"
                className="form-control"
                rows="3"
                placeholder="Describe tu problema"
                required
              ></textarea>
            </label>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3 rounded-3">
                Enviar
              </button>
            </div>
          </form>

          {showAlert && (
            <div className="alert alert-success mt-3 mb-4" role="alert">
              Su problema está siendo analizado. ¡Muchas gracias por contactarse con nosotros! Cine Estelar ©
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
