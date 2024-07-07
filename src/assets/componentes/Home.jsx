import React, { useState } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import FiltroPorCategoria from './FiltroPorCategoria';
import Footer from './Footer';
import ListaDeProductos from './ListaDeProductos';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const productosAMostrar = ListaDeProductos.filter(producto => producto.categoria === 'muestra');

  return (
    <div>
       <Navbar/>
      <Carousel />
      <FiltroPorCategoria productos={productosAMostrar} cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  );
}

export default Home;
