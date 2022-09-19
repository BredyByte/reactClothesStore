import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import './cart-dropdown.styles.scss';

import CustomButton from '../customUI/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartContext} from '../../contexts/cart.context';
import {logDOM} from "@testing-library/react";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        { cartItems.map(item => {
          return <CartItem key={item.id} cartItem={item} />
        }) }
      </div>

      <CustomButton onClick={goToCheckoutHandler} >GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
