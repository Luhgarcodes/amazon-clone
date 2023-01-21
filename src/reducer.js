import { useState } from 'react'
export const initialState = {
    basket: [],
    user: null,
}
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

export const handleBackground = () => {

    var imagechange = [
        "images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
        "m.media-amazon.com/images/I/51AQhraI0-L._SX3000_.png",
        "m.media-amazon.com/images/I/610Q56vDdSL._SX3000_.jpg",
        "m.media-amazon.com/images/I/610Q56vDdSL._SX3000_.jpg",
        "m.media-amazon.com/images/I/61KdLlGNBPL._SX3000_.jpg",
        "m.media-amazon.com/images/I/71qs801dvnL._SX3000_.jpg",
        "m.media-amazon.com/images/I/81cP1IAxf-L._SX3000_.jpg",
        "m.media-amazon.com/images/I/71gbdEe+82L._SX3000_.jpg",
        "m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg",
        "m.media-amazon.com/images/I/61vioLzzNxL._SX3000_.jpg",

    ]

    var changer = Math.floor(Math.random() * 10);
    var img = imagechange[changer];
    String(img);
    return img;

}
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: [],
            };
        case "REMOVE_ITEM":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id = action.id
            )
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            else {
                console.warn(`${action.id} cannot resolved`)
            }
            return {
                ...state,
                basket: newBasket,
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}
export default reducer;