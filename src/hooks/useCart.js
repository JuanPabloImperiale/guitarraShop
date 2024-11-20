import { useState, useEffect } from "react";
import { db } from "../data/db";
import { useMemo } from "react";

export const useCart = () => {
  const initialStateCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialStateCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;
  const title = "Nuestra Colección";
  const subTitle = "GuitarLA - Web app by Imperiale Juan Pablo";

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);
    if (itemExist >= 0) {
      if (cart[itemExist].quantity >= MAX_ITEMS) return;
      const updateCart = [...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  function increaseGuitar(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function decreaseGuitar(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function clearCart() {
    setCart([]);
  }

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  const cartIconTotal = useMemo(  () => cart.reduce((total, item) => total + item.quantity, 0),
  [cart]);

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseGuitar,
    increaseGuitar,
    clearCart,
    title,
    subTitle,
    isEmpty,
    cartTotal,
    cartIconTotal
  };
};
