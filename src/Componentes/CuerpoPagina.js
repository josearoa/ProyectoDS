import React, { useState } from 'react';
import akira from "../imagenes/akira.png";
import "../hola.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CuerpoPagina() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-0 bg-primary rounded">
      <div className="row">
        <h3 className="text-center bg-secondary rounded-top">AKIRA</h3>
        <div className="col-md-3">
          <img src={akira} alt="Akira" style={{ cursor: 'pointer' }} onClick={openModal} />
        </div>
        <div className="col-md-9">
          <p>Año 2019. Neo-Tokyo es una ciudad construida sobre las ruinas de la antigua capital japonesa destruida tras la Tercera Guerra Mundial...</p>
          <div className="row">
            <div className="col-md-6">
              <h6>Titulo original: </h6>
              <p>AKIRA [1988]</p>
            </div>
            <div className="col-md-6">
              <h6>Director: </h6>
              <p>Katsuhiro Otomo</p>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} className="custom-modal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <Modal.Header closeButton>
            <h5 className="modal-title text-center" style={{paddingLeft:"50%"}}>AKIRA</h5>
            </Modal.Header>
            <Modal.Body style={{ position: 'relative', paddingTop: '530px', paddingLeft:"560px", paddingRight:"560px" }}>
              <iframe
                width= '100%'
                height= '100%'
                src="https://www.youtube.com/embed/Y2Ptue29P_o"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </Modal.Body>

          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CuerpoPagina;
