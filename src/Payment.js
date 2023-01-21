import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from "react-router-dom";
import './styledocs/Payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { db } from './firebase';
import axios from "./axios";


const Payment = () => {

    var v = 1;
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [{ basket, user }, dispatch] = useStateValue();
    const [error, setError] = useState(null);

    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);

    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        console.log("use effect is called");
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            console.log(`the payment js ${response.data.clientSecret}`);
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
        console.log("getClinetSecret is called")
    }, [basket]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            console.log("handle submit is called and bd is saved -----++++++-------");

            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            console.log("sent data to db ")
            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders')

        })
    }
    const handleChange = event => {

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    {<Link to='/checkout'>
                        Cart Items ({basket?.length || 0})
                    </Link>}
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        {(user?.email && <>
                            <p>{user?.email}</p>
                            <p>123 Lakeview Avenue</p>
                            <p>chennai, TN</p></>) || "Guest Login "}


                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id + v++}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled
                                    || succeeded} >
                                    <span>{processing ? <p>
                                        Processing</p> :
                                        "Buy Now"
                                    }</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Payment