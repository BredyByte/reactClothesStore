import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButton from '../customUI/custom-button/custom-button.component';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"/>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
