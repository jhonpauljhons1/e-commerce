import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    if (cartItems.some(item => item.id === product.id)) {
      // Si el producto ya está en el carrito, incrementar la cantidad u omitirlo
      return;
    }
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Validación con PropTypes
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
