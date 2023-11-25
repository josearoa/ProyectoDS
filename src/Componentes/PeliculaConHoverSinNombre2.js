import React from 'react';
import '../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const PeliculaConHoverSinNombre = ({ pelicula, imagePath }) => {
    const { poster_path, title } = pelicula;

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 pelicula-custom"> {/* Agrega una clase personalizada */}
                <img src={`${imagePath}${poster_path}`} className="card-img-top" alt={title} />
                <div className="overlay">
                    <NavLink to={`/DetallesPelicula/${pelicula.id}`} className="card-button">
                        Ver detalles
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PeliculaConHoverSinNombre;