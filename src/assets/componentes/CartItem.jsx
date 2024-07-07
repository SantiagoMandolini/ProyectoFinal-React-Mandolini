import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <li>
      {item.name} - Cantidad: {item.quantity}
      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </li>
  );
};

export default CartItem;
