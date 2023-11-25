import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import Carousel from '../Componentes/Carousel';
import PeliculaConHoverSinNombre from '../Componentes/PeliculaConHoverSinNombre';
import { BiCameraMovie } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  const [peliculas, setPeliculas] = useState([]);
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "66b7a456851fd240629f9890c2795696";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const { data: { results } } = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
        },
      });

      const slicedResults = results.slice(0, 8);

      setPeliculas(slicedResults);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Carousel />
      <div className="container mt-5">
      <h2 className="rounded-title-container text-white mt-2 mb-3">
        Peliculas <BiCameraMovie style={{ verticalAlign: 'middle' }} />
      </h2>
        <div className="row justify-content-center">
          {peliculas.map((pelicula) => (
            <PeliculaConHoverSinNombre
              key={pelicula.id}
              pelicula={pelicula}
              imagePath={IMAGE_PATH}
            />
          ))}
        </div>
        <div className="text-center mb-5">
          <NavLink to="/Cartelera">
            <button className="btn btn-danger rounded zoom-hover">Ver más películas</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
