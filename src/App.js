import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Paginas/Homepage';
import Cartelera from './Paginas/Cartelera';
import Localidades from './Paginas/Localidades';
import Confiteria from './Paginas/Confiteria';
import Navbar from './Componentes/Navbar';
import Login from './Paginas/Login';
import DetallesPelicula from "./Paginas/DetallesPelicula"
import Footer from './Componentes/Footer';
import MovieCarousel from './Componentes/Carousel';
import Acerca from './Paginas/Acerca';
import Formulario from './Paginas/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path="/Cartelera" element={<Cartelera />} />
          <Route path="/Localidades" element={<Localidades />} />
          <Route path="/Confiteria" element={<Confiteria />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/DetallesPelicula/:id" element={<DetallesPelicula />} />
          <Route path="/Carousel" element={<MovieCarousel />} />
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/Form" element={<Formulario />} />
        </Routes>

        <div className="footer mt-auto py-3 bg-dark">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;