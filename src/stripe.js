import { useState, useContext } from "react";
import "./pages/styles/Payment.scss"
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import CartContext from "./context/CartContext";

import { Button } from "@mui/material";

const stripePromise = loadStripe("pk_test_51KulCkKPPOSdlu66HMim5gMuHpTvFKGaxWrHziE0ApmiBMYBe03Oxon98h4IDAuvdG15kFfUcmWWD382MusBp8nR00yeGSjmEU");

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { calcTotal, } = useContext(CartContext)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        if (!error) {
            const { id } = paymentMethod

            const { data } = await axios.post(
                "http://localhost:3001/api/checkout",
                {
                    id,
                    amount: calcTotal(),

                }
            );
            console.log(data);

        }


    }

    return (
        <form className="formPayment" onSubmit={handleSubmit}>
            
            <h3>Total= $ {calcTotal()}</h3>
            <p>Ingrese los datos de la tarjeta de credito/debito</p>
            <CardElement />
            <button >Pagar</button>
            
        </form>)

}

const Pago = () => {
    return (
        <Elements stripe={stripePromise}>

            <CheckoutForm />

        </Elements>
    )
}
export default Pago


