import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

import CustomButton from '../customUI/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartContext} from '../../contexts/cart.context';

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <CustomButton onClick={goToCheckoutHandler} >GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
