import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-1">
            <h3>Contacto</h3>
            <p>Dirección: Calle del Cine, Número 123</p>
            <p>Email: info@cineestelar.com</p>
            <p>Teléfono: (+56) 9 1234-5678</p>
            <Link to="/Form" className="text-decoration-none custom-link">Reclamos</Link>
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
            <Link to="/Acerca" className="text-decoration-none custom-link ">
              <h3>Acerca de nosotros</h3>
            </Link>
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