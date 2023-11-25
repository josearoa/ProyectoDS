import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { TiTicket } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  const mapGenreIdToName = (genreId) => {
    const genreMap = {
      28: 'Acción',
      12: 'Aventura',
      16: 'Animación',
      35: 'Comedia',
      80: 'Crimen',
      99: 'Documental',
      18: 'Drama',
      10751: 'Familia',
      14: 'Fantasía',
      36: 'Historia',
      27: 'Terror',
      10402: 'Música',
      9648: 'Misterio',
      10749: 'Romance',
      878: 'Ciencia ficción',
      10770: 'Película de TV',
      53: 'Suspenso',
      10752: 'Bélica',
      37: 'Western',
    };
    const genreName = genreMap[genreId];
    return genreName || null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'b8a0b162efaf55fd9c14fc56b259edec';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=es`
        );

        const fetchMovieDetails = async (movie) => {
          const detailedResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=es`
          );
          return { ...movie, runtime: detailedResponse.data.runtime};
        };

        const moviesWithDetails = await Promise.all(
          response.data.results.slice(0, 5).map(fetchMovieDetails)
        );

        setMovies(moviesWithDetails);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Carousel interval={3000} className="custom-carousel">
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div className="carousel-item-container">
              <img
                className="img-carrusel d-block w-100"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="opacity-layer"></div>
              <Carousel.Caption>
                <h3>{movie.title}</h3>
                <p>{movie.genre_ids.slice(0, 2).map(mapGenreIdToName).filter(Boolean).join(', ')} - {movie.runtime} minutos </p>
                <div className="button-container">
                  <NavLink to={`/DetallesPelicula/${movie.id}`} className="nav-link">
                    <button className="btn btn-danger rounded-pill action-button-carousel">
                      <TiTicket style={{ verticalAlign: 'middle' }}/> Comprar
                    </button>
                  </NavLink>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
