import React from 'react';
import './styledocs/Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

const Product = ({ title, image, price, rating, id }) => {
    var v = 1;
    const [state, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className="product" >

            <div className="product__info">
                <p>{title}</p>

                <p className="product__price">
                    <big>₹ </big>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) => (<StarIcon key={id + v++}></StarIcon>))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product;


