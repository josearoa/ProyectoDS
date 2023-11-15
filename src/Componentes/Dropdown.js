import React from 'react';
import { NavLink } from 'react-router-dom';

function Dropdown() {
  return (
    <div className="nav-item dropdown">
      <button
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <NavLink to="/ruta1" className="dropdown-item">
          Opción 1
        </NavLink>
        <NavLink to="/ruta2" className="dropdown-item">
          Opción 2
        </NavLink>
        <NavLink to="/ruta3" className="dropdown-item">
          Opción 3
        </NavLink>
      </div>
    </div>
  );
}

export default Dropdown;
