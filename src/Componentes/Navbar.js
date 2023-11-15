import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';
import logo from '../imagenes/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navbar() {
  const nombres = ['Nombre1', 'Nombre2', 'Nombre3'];

  return (
    <nav className='nav'>
      
      {/* <img src={logo} alt="logo"></img> */}
      <NavLink to="/Homepage" className="nav-item z-10" activeclassname="is-active" exact="true">Home</NavLink>
      <NavLink to="/Cartelera" className="nav-item" activeClassName="is-active">Cartelera</NavLink>
      <NavLink to="/Localidaes" className="nav-item" activeClassName="isactive">Cines</NavLink>
      <NavLink to="/Confiteria" className="nav-item" activeClassName="is-active">Confitería</NavLink>
      <NavLink to="/Login" className="nav-button1">Iniciar Sesión</NavLink>

      <div>
      {/* Otro contenido de la página de inicio aquí */}

      {/* Botón y lista desplegable */}
      <Dropdown className='z-30'>
        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
          Nombres
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* Mostrar lista de nombres en el menú desplegable */}
          {nombres.map((nombre, index) => (
            <Dropdown.Item key={index}>{nombre}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>

      <span className="nav-indicador"></span>
    </nav>
  );
}

export default Navbar;
