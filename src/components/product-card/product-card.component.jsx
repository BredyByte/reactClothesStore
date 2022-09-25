import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import CustomButton, {BUTTON_TYPE_CLASSES} from '../customUI/custom-button/custom-button.component';

import {ProductCardContainer, Footer} from './product-card.styles';


const ProductCard = ({ product }) => {
  const {name, price, imageUrl} = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
