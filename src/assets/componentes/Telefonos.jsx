import React, { useState } from 'react';
import Header from './Header';
import FiltroPorCategoria from './FiltroPorCategoria';
import Footer from './Footer';
import ListaDeProductos from './ListaDeProductos';


const Telefonos = () => {
  
  const [cartItems, setCartItems] = useState([]);

 
  const productosAMostrar = ListaDeProductos.filter(producto => producto.categoria === 'telefono');

  return (
    <div>
      <Header />
      <FiltroPorCategoria productos={productosAMostrar} cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  );
}

export default Telefonos;
