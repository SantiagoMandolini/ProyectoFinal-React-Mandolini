import React from 'react';
import CartWidget from './CartWidget';

const ItemListContainer = () => {
 
  const cartItemCount = 1; 

  return (
    <div>
      
      <CartWidget cartItemCount={cartItemCount} />
    </div>
  );
};

export default ItemListContainer;
