import React from 'react';

function Box({ comboName, comboPrice, comboImage, comboDescription }) {

  return (
    <div className='contenido'>
      <img src={comboImage} alt={comboName} />
      <p className='combo-name'>{comboName}</p>
      <p className='combo-description'>{comboDescription}</p>
      <p className='combo-price'>{comboPrice}</p>
      <div className='counter'>
      </div>
    </div>
  );
}

export default Box;

