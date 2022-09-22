import React, {useContext} from 'react';

import {CartContext} from '../../contexts/cart.context';

import {CheckoutItemContainer, ImageContainer, ProductInfo, Quantity, RemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ProductInfo>{name}</ProductInfo>
      <Quantity>
        <div onClick={removeItemHandler}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={addItemHandler} >&#10095;</div>
      </Quantity>
      <ProductInfo>{price}</ProductInfo>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
