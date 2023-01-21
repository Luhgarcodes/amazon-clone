import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './styledocs/CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, title, price, image, rating, hideButton }) => {
    var v = 1;
    const [{ basket }, dispatch] = useStateValue();
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_ITEM',
            id: id,
        })
    }
    return (
        <div className="checkoutproduct">
            <img src={image} alt="" className="checkoutproduct__image" />
            <div className="checkoutproduct__info">
                <p>{title}</p>
                <p className="checkoutproduct__price">
                    <big>₹</big><strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (<StarIcon key={id + v++}></StarIcon>))
                    }

                </div>
                {
                    !hideButton && (<button onClick={removeItem}>Remove Item</button>)
                }


            </div>
        </div>
    )
}

export default CheckoutProduct