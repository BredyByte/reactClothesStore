import React, {useContext} from 'react';

import CustomButton, {BUTTON_TYPE_CLASSES} from '../customUI/custom-button/custom-button.component';
import {CartContext} from '../../contexts/cart.context';

import {ProductCardContainer, Footer} from './product-card.styles';


const ProductCard = ({ product }) => {
  const {name, price, imageUrl} = product;
  const {addItemToCart} = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span>{price}$</span>
      </Footer>
      <CustomButton onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to card</CustomButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
