import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import logo_mini from '../imagenes/logo_mini.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const AuthForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ fullName: '', email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [alert, setAlert] = useState(null);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
    // Cerrar la alerta al cambiar entre formularios
    setAlert(null);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos de inicio de sesión
    console.log('Login Data:', loginData);
    // Simulación de alerta de éxito
    setAlert({ type: 'success', message: 'Inicio de sesión exitoso' });
    // Lógica adicional si es necesario
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos de registro
    console.log('Signup Data:', signupData);
    // Simulación de alerta de éxito
    setAlert({ type: 'success', message: 'Registro exitoso' });
    // Lógica adicional si es necesario
  };

  return (
    <div className="auth-container">
      <div className="auth-card mb-5">
        {/* Alerta de éxito o error */}
        {alert && (
          <Alert variant={alert.type} onClose={() => setAlert(null)} dismissible>
            {alert.message}
          </Alert>
        )}

        <div className="auth-header">
          <h2>{isLogin ? 'Iniciar Sesión' : 'Regístrate'}<span><img src={logo_mini} className='form-img-login' alt='hola'/></span></h2>
        </div>
        <div className="auth-body">
          {isLogin ? (
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Dirección de correo electrónico</label>
                <input type="email" className="form-control"id="email"name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Acceder</button>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Nombre de usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Dirección de correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
          )}
        </div>
        <div className="auth-footer">
          <p>
            {isLogin ? "¿No te has registrado? " : '¿Ya tienes cuenta? '}
            <span className="link" onClick={handleFormToggle}>
              {isLogin ? 'Regístrate' : 'Inicia sesión'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
