import React, { useState } from 'react';
import imgjose from '../imagenes/jose.jpeg';
import imgisa from '../imagenes/isa2.png';
import imgfrancisco from '../imagenes/francisco.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function MainSection() {
  const [zoomedImg, setZoomedImg] = useState(null);

  const handleImageClick = (imgSrc) => {
    setZoomedImg(imgSrc);
  };

  const closeZoomedImage = () => {
    setZoomedImg(null);
  };

  return (
    <main className="main mb-5">
      <h2 className="subtitles">Historia y proposito</h2>
      <p className="parrafos">Cine Estelar es tu destino cinematográfico definitivo. Nuestra página web está diseñada para brindarte una experiencia completa en el mundo del cine, desde descubrir las películas más emocionantes hasta planificar tu próxima salida al cine con amigos y familiares. Nos esforzamos por ofrecer información detallada sobre las películas en cartelera, detalles de las funciones, ubicaciones de cines y servicios adicionales para que disfrutes al máximo de tu experiencia cinematográfica.</p>
      <p className="parrafos">Hace unos años, un grupo apasionado de amantes del cine se unió para crear Cine Estelar, un sitio web dedicado a celebrar la magia del cine. La idea surgió de la creencia de que ir al cine no es solo ver una película, sino sumergirse en una experiencia única y emocionante. Con este objetivo en mente, decidimos construir una plataforma que no solo ofreciera información sobre las últimas películas, sino que también facilitara la planificación de tus salidas al cine.</p>
      <h2 className="subtitles">Creadores</h2>
      <div className="names d-flex flex-column flex-md-row"> {/* Cambié la clase names para usar flexbox */}
        <section className="name">
          <div className="img-name" onClick={() => handleImageClick(imgjose)}>
            <img src={imgjose} alt="foto-jose" className="img-fluid" />
          </div>
          <h3>José Aguilera</h3>
          <p>Ingeniería Civil Industrial - Informática</p>
        </section>

        <section className="name">
          <div className="img-name" onClick={() => handleImageClick(imgisa)}>
            <img src={imgisa} alt="foto-isa" className="img-fluid" />
          </div>
          <h3>Isadora Ahumada</h3>
          <p>Ingeniería Civil Industrial - Informática</p>
        </section>

        <section className="name">
          <div className="img-name" onClick={() => handleImageClick(imgfrancisco)}>
            <img src={imgfrancisco} alt="foto-francisco" className="img-fluid" />
          </div>
          <h3>Francisco Delgado</h3>
          <p>Ingeniería Civil Informática</p>
        </section>
      </div>

      {zoomedImg && (
        <div className="image-zoom">
          <img src={zoomedImg} alt="zoomed" onClick={closeZoomedImage} />
        </div>
      )}
    </main>
  );
}

export default MainSection;