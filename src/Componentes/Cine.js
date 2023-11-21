import React, { useState } from 'react';
import '../App.css';

function Cine({ cineName, cineImage, cineDescription }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='contenido1'>
      <img src={cineImage} alt={cineName} />
      <p className='cine-name'>{cineName}</p>
      <p className='cine-description'>{cineDescription}</p>
   </div>
  );
}

export default Cine;

