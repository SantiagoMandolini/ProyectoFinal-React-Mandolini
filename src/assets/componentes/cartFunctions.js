export const addToCart = (product, cartItems, setCartItems) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
       
        const updatedCartItems = cartItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
    } else {
        
        const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
        setCartItems(updatedCartItems);
    }
};


export const removeFromCart = (productId, cartItems, setCartItems) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
};


export const clearCart = (setCartItems) => {
    setCartItems([]);
};