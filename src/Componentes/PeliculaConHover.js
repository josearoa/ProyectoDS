import React from 'react';
import '../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const PeliculaConHover = ({ pelicula, imagePath }) => {
    return (
        <div className="col-lg-3 mb-4">
            <div className="card">
                <div className="overlay">
                <NavLink to={`/DetallesPelicula/${pelicula.id}`} className="nav-link">
                        <button className="btn btn-danger rounded-pill card-button">
                            Ver detalles
                        </button>
                </NavLink>
                </div>
                <img src={`${imagePath}/${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                <div className="card-body">
                    <h5 className="card-title">{pelicula.title}</h5>
                    
                </div>
            </div>
        </div>
    );
};

export default PeliculaConHover;