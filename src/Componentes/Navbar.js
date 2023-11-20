import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../imagenes/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navbar() {
  const nombres = ['Nombre1', 'Nombre2', 'Nombre3'];

  return (
    <nav className='nav'>
      {/* <img src={logo} alt="logo"></img> */}
      <NavLink to="/Homepage" className="nav-item" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/Cartelera" className="nav-item" activeClassName="is-active">Cartelera</NavLink>
      <NavLink to="/Localidaes" className="nav-item" activeClassName="is-active">Cines</NavLink>
      <NavLink to="/Confiteria" className="nav-item" activeClassName="is-active">Confitería</NavLink>
      <NavLink to="/Login" className="nav-button">Iniciar Sesión</NavLink>
      <span className="nav-indicador"></span>
    </nav>
  );
}

export default Navbar;