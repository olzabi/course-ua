import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GqdsWJ5kGLDsVifD3181kTYJB5DAjIB4pi4bYzDwVK24BeBpuXaAKvlksPb77qbYZGx2oumD04WEs7jdI04tBoZ00HWdBOBFM';

    const onToken = token => {
        console.log(token);
        alert('Оплата успішна');
    }

    return (
        <StripeCheckout
           label='Платити зараз'
           name='COURSE UA'
           billingAddress
           shippingAddress
           image="https://svgshare.com/i/CUz.svg"
           description={`Ваша сума становить $${price}`}
           amount={priceForStripe}
           panelLabel='Платити зараз'
           token={onToken}
           stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;