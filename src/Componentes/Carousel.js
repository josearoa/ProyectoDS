import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { TiTicket } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'b8a0b162efaf55fd9c14fc56b259edec';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=es`
        );
        setMovies(response.data.results.slice(0, 5));
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Carousel interval={3000}>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <img
              className="d-block w-100" 
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className="overlay-container"></div>
            <Carousel.Caption>
            <h3 className="title-with-stroke text-white">{movie.title}</h3>
              <div className="button-container">
                <NavLink to={`/DetallesPelicula/${movie.id}`} className="nav-link">
                  <button className="btn btn-danger rounded-pill action-button-carousel">
                    <TiTicket /> Comprar
                  </button>
                </NavLink>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;