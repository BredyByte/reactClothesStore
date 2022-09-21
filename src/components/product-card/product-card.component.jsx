import React, {useContext} from 'react';
import './product-card.styles.scss';
import CustomButton, {BUTTON_TYPE_CLASSES} from '../customUI/custom-button/custom-button.component';
import {CartContext} from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
  const {name, price, imageUrl} = product;
  const {addItemToCart} = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to card</CustomButton>
    </div>
  );
};

export default ProductCard;
