import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ComplaintForm = () => {
  const [complaintData, setComplaintData] = useState({ name: '', email: '', phoneNumber: '', complaint: '' });

  const handleChange = (e) => {
    setComplaintData({ ...complaintData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos de reclamo
    console.log('Complaint Data:', complaintData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Formulario de Reclamo</h2>
        </div>
        <div className="auth-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={complaintData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={complaintData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Número de Teléfono</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={complaintData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="complaint" className="form-label">Reclamo</label>
              <textarea
                className="form-control"
                id="complaint"
                name="complaint"
                value={complaintData.complaint}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Enviar Reclamo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;