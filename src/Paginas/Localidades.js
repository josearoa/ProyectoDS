import React from 'react';
import '../App.css';
import Cine from '../Componentes/Cine';
import cine1 from '../imagenes/cine1.png';
import cine2 from '../imagenes/cine2.png';
import cine3 from '../imagenes/cine3.png';

function Localidades() {
  const cines = [
    {
      name: 'CINE OASIS PEÑALOLEN',
      image: cine1,
      description: 'Disfruta de lo mejor en entretenimiento en nuestro oasis cinematográfico. Experimenta películas premium, palomitas frescas y comodidad única en el corazón del Oasis Mall.',
    },
    {
      name: 'CINE SUNRISE ALAMEDA',
      image: cine2,
      description: 'Despierta tus sentidos en nuestro cine exclusivo. Sumérgete en proyecciones de alta gama, ambiente soleado y asientos VIP en Sunrise Plaza.',
    },
    {
      name: 'CINE LUNA PARK ÑUÑOA',
      image: cine3,
      description: 'Vive la magia del cine bajo las estrellas. Experimenta noches mágicas con vistas espectaculares y emocionantes proyecciones al aire libre en Luna Park.',
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