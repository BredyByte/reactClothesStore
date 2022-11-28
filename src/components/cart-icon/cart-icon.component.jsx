import React, { useContext, useEffect, useRef } from 'react'
import {CartContext} from '../../contexts/cart.context';

import {CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = ({addClass}) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const cartRef = useRef();
  const clickOutsideCart = (e) => {
    if(!e.path.includes(cartRef.current)) {
      setIsCartOpen(false);
    }
  }

  useEffect(() => {
    document.querySelector("body").addEventListener("click", e => clickOutsideCart);
  }, []);

  return (
    <CartIconContainer ref={cartRef} onClick={toggleIsCartOpen} >
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
