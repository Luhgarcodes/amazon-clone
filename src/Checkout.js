import React from 'react'
import './styledocs/Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

const Checkout = () => {
    var v = 1;
    const [{ basket, user }, dispatch] = useStateValue();
    const username = user?.email;
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h3>Hello, {username ? (username).slice(0, username.indexOf('@')) : "Guest"}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
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
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
export default Checkout