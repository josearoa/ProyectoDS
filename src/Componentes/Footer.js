import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contacto</h3>
            <p>Dirección: Calle del Cine, Número 123</p>
            <p>Email: info@cinepagina.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h3>Síguenos</h3>
            <div className="social-icons d-flex justify-content-around mt-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2xl" className="text-white" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2xl" className="text-white" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2xl" className="text-white" />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="/homepage">Inicio</a></li>
              <li><a href="/cartelera">Cartelera</a></li>
              <li><a href="/localidades">Localidades</a></li>
              <li><a href="/confiteria">Confitería</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2023 Cine Estelar. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;