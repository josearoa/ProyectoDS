import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Componentes/Homepage';
import Cartelera from './Componentes/Cartelera';
import Localidades from './Componentes/Localidades';
import Confiteria from './Componentes/Confiteria';
import Navbar  from './Componentes/Navbar';
import Login from './Componentes/Login';
import Footer from './Componentes/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="z-index 20"/>
        <Routes>
          <Route path="/Homepage" className="z-index 10"  element={<HomePage />} />
          <Route path="/Cartelera" element={<Cartelera />} />
          <Route path="/Localidades" element={<Localidades />} />
          <Route path="/Confiteria" element={<Confiteria />} />
          <Route path='/Login' element={<Login/>}/>
        </Routes>
       {/*  <Footer /> */}
      </div>
      <HomePage />
    </Router>
  );
}

export default App;