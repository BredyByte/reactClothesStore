import React from 'react';
import {CartInputContainer, ItemDetail}  from './cart-item.styles';

const CartItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <CartInputContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetail>
    </CartInputContainer>
  );
};

export default CartItem;
