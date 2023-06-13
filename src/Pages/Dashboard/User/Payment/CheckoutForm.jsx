import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import './CheckoutForm.css'
import { AuthContext } from '../../../../Providers/AuthProviders';
import useAxiosSecure from '../../../../Components/hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CheckoutForm = ({price,selectedClass}) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("")
  console.log(price); 
  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price })
    .then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          if (card === null) {
            return;
          }

          const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
          });
          if (error) {
            setCardError(error.message);
            console.log("error", error.message);
          } else {
            setCardError("");
            console.log("payment method", paymentMethod);
          }
      
          setProcessing(true)
          const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || "unknown",
                  email: user?.email || "anonymous",
                },
              },
            });
      
          if (confirmError) {
            console.log(confirmError);
          }
          console.log(paymentIntent);
      
          setProcessing(false)
          if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            // TODO: next step
            const payment = {
              email: user?.email,
              transactionId: paymentIntent.id,
              price,
              image:selectedClass.image,
              instructor: selectedClass.instructor,
              date: new Date(),
              quantity: 1,
              status: 'service pending',
             name: selectedClass.name,
             _id: selectedClass._id,
              
            }
            axiosSecure.post('/payments', payment)
            .then(res =>{
              console.log(res.data);
              if(res.data.insertedId){
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Added successfully',
                  showConfirmButton: false,
                  timer: 1500
                }) 
              }
            })
          }


    }    

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm  btn-accent bt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing }
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with this transactionId : {transactionId}</p> }
        </>
    );
};

export default CheckoutForm;