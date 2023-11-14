import React from 'react';
import HomePage from './Componentes/Homepage';
import Cartelera from './Componentes/Cartelera';
import Localidades from './Componentes/Localidades';
import Confiteria from './Componentes/Confiteria';
import Navbar  from './Componentes/Navbar';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Cartelera/>
      <Localidades/>
      <Confiteria/>
      <Footer/>
    </div>
  );
}

export default App;
