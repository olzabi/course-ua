import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems,selectCartTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import "./checkout.styles.scss";

const CheckoutPage = ({cartItems, total}) => {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Продукт</span>
          </div>
          <div className="header-block">
            <span>Опис</span>
          </div>
          <div className="header-block">
            <span>Кількість</span>
          </div>
          <div className="header-block">
            <span>Ціна</span>
          </div>
          <div className="header-block">
            <span>Видалити</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total"><span>ВСЬОГО: {total} ₴</span></div>
        <div className="test-warning">
        * Будь ласка, використовуйте наступну тестову кредитну картку для оплати
          <br />
          4242 4242 4242 4242 (VISA) - Термін дії: 01/40 - CVV: 123 
        </div>
        <StripeCheckoutButton price={total} />
      </div>
    );
} 

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);
