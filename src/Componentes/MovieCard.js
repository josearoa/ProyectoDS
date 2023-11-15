import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../App.css';

const MovieCard = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=b8a0b162efaf55fd9c14fc56b259edec&language=es`
          );
          setMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
  
      fetchMovies();
    }, []);
  
    return (
      <div className="movie-card-container">
        <div className="movie-list">
          {movies.slice(0, 6).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MovieCard;