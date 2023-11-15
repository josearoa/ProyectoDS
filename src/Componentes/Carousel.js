import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import './../App.css';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Lógica para obtener datos de la API de TMDb
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
            style={{ width: '100%', height: '700px' }}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
          />
           <div className="overlay"></div>
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default MovieCarousel;