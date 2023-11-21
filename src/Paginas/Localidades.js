import React from 'react';
import '../App.css';
import Cine from '../Componentes/Cine';
import cine1 from '../imagenes/cine1.png';
import cine2 from '../imagenes/cine2.png';
import cine3 from '../imagenes/cine3.png';

function Localidades() {
  const cines = [
    {
      name: 'CINE 1',
      image: cine1,
      description: 'Descripción del cine 1',
    },
    {
      name: 'CINE 2',
      image: cine2,
      description: 'Descripción del cine 2',
    },
    {
      name: 'CINE 3',
      image: cine3,
      description: 'Descripción del cine 3',
    }
  ];

  return (
    <div className='localidades'>
      <div className='cines'>
        <h1>Nuestros cines</h1>
        <div className='espacio'>
          {cines.map((cine, index) => (
            <div key={index} className='cine'>
              <Cine
                cineImage={cine.image}
                cineName={cine.name}
                cineDescription={cine.description}
              />
              </div> 
            ))}
        </div>
      </div>
    </div>
);
}

export default Localidades;