

import React, { useState } from 'react';
import Navbar from './Navbar';
import FiltroPorCategoria from './FiltroPorCategoria';
import Footer from './Footer';
import ListaDeProductos from './ListaDeProductos';

const Juegos = () => {
  const [cartItems, setCartItems] = useState([]);

 
  const productosAMostrar = ListaDeProductos.filter(producto => producto.categoria === 'juego');

  return (
    <div>
      <Navbar />
     <FiltroPorCategoria productos={productosAMostrar} cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  );
}

export default Juegos;
