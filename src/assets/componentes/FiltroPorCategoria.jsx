import React from 'react';
import { Link } from 'react-router-dom';

const FiltroPorCategoria = ({ productos, addToCart }) => {
  if (!productos || productos.length === 0) {
    return <p>No hay productos disponibles</p>;
  }

  const handleAddToCartClick = (producto) => {
    addToCart(producto);
  };

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/producto/${producto.id}`}>
              {producto.nombre} - ${producto.precio}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltroPorCategoria;
