import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function Navbar(){
  return (
    <nav className='nav'>
      <NavLink to="/Homepage" className="nav-item" activeclassname="is-active" exact="true">Home</NavLink>
      <NavLink to="/Cartelera" className="nav-item" activeClassName="is-active">Cartelera</NavLink>
      <NavLink to="/Localidades" className="nav-item" activeClassName="isactive">Cines</NavLink>
      <NavLink to="/Confiteria" className="nav-item" activeClassName="is-active">Confitería</NavLink>
      <NavLink to="/Login" className="nav-button">Iniciar Sesión</NavLink>
      <span className="nav-indicador"></span>
    </nav>
  );
}

export default Navbar;
