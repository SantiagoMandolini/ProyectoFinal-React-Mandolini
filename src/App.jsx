import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/componentes/Home';
import Ofertas from './assets/componentes/Ofertas';
import Telefonos from './assets/componentes/Telefonos';
import Consolas from './assets/componentes/Consolas';
import Juegos from './assets/componentes/Juegos';
import ProductoVistaPrevia from './assets/componentes/ProductoVistaPrevia';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (producto) => {
    setCartItems([...cartItems, producto]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/telefonos" element={<Telefonos />} />
          <Route path="/consolas" element={<Consolas />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/producto/:id" element={<ProductoVistaPrevia addToCart={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
