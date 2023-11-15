import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel';
import MovieCard from './MovieCard';

const Homepage = () => {
  const [someState, setSomeState] = useState(null);

  useEffect(() => {
    // Lógica de efecto
  }, []);

  return (
    <div>
      <Carousel />
      <MovieCard/>
    </div>
  );
};

export default Homepage;