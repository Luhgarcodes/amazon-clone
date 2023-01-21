import moment from 'moment'
import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from "react-currency-format";
import './styledocs/Order.css';

const Order = ({ order }) => {
    var v = 1;
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    key={item.id + v++}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    hideButton
                />

            ))}
            <CurrencyFormat
                renderText={(value) => (

                    <h3 className="order__total">Order total-:{value}</h3>


                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
        </div>
    )

}

export default Order