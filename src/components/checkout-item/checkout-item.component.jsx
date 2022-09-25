import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import {CheckoutItemContainer, ImageContainer, ProductInfo, Quantity, RemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();


  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems ,cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

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
