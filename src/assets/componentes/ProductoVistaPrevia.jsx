import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Productos from './ListaDeProductos';

const ProductoVistaPrevia = ({ addToCart }) => {
  const location = useLocation();
  const params = useParams();

  const { id } = params;
  const producto = Productos.find(prod => prod.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCartClick = () => {
    addToCart(producto);
  };

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>{producto.precio}</p>
      <p>{producto.categoria}</p>
      <button onClick={handleAddToCartClick}>Agregar al carrito</button>
    </div>
  );
};

export default ProductoVistaPrevia;
