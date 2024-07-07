import React from 'react';
import CartItem from './CartItem';

const CartWidget = ({ cartItems, removeFromCart }) => {
  if (!cartItems || cartItems.length === 0) {
    return (
      <div>
        <h2>Carrito de Compras</h2>
        <p>El carrito está vacío</p>
      </div>
    );
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <p>Total de productos: {totalItems}</p>
      <p>Total a pagar: ${totalPrice}</p>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </ul>
    </div>
  );
};

export default CartWidget;
