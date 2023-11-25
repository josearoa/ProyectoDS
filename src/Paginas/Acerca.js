import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import imgjose from '../imagenes/jose.jpeg';
import imgisa from '../imagenes/isa2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function MainSection() {

  return (
    <Container className="about-us-container">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="about-us-title">Historia y proposito</h1>
          <p className="about-us-description">
          Cine Estelar es tu destino cinematográfico definitivo. Nuestra página web está diseñada para brindarte una experiencia completa en el mundo del cine, desde descubrir las películas más emocionantes hasta planificar tu próxima salida al cine con amigos y familiares. Nos esforzamos por ofrecer información detallada sobre las películas en cartelera, detalles de las funciones, ubicaciones de cines y servicios adicionales para que disfrutes al máximo de tu experiencia cinematográfica.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4} className="text-center">
          <Image src={imgjose} roundedCircle className="about-us-team-member" />
          <h4 className="about-us-team-member-name">José Aguilera</h4>
          <p className="about-us-team-member-role">Ingenieria Civil Industrial / Informatica</p>
        </Col>

        <Col md={4} className="text-center">
          <Image src={imgisa} roundedCircle className="about-us-team-member" />
          <h4 className="about-us-team-member-name">Isadora Ahumada</h4>
          <p className="about-us-team-member-role">Ingenieria Civil Industrial / Informatica</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;