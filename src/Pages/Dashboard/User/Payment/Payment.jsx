import React from 'react';
import SectionTItle from '../../../../Components/SectionTitle/SectionTItle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useSelectedClasses from '../../../../Components/hooks/useSelectedClasses';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {

   

    return (
        <div>
            <SectionTItle
            subHeading="please process payment"
            heading="payment "
            ></SectionTItle>
            <Elements  stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;