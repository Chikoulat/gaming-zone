import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [shop, setShop] = useState(() => {
    const savedShop = localStorage.getItem("shopItem");
    return savedShop ? JSON.parse(savedShop) : 0;
  });

  const [cart, setCart] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const addToCart = (item) => {
    const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingCartItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setShop((prevShop) => prevShop + 1);
  };

  const decreaseQuantity = (item) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );

      return newCart.filter((cartItem) => cartItem.quantity > 0);
    });
    setShop((prevShop) => prevShop - 1);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
    setShop((prevShop) => prevShop - 1);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("shopItem", JSON.stringify(shop));
  }, [shop]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        shop,
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
