import React from 'react'
import { Link } from 'react-router-dom'
import './styledocs/IndianBrands.css'

const IndianBrands = ({ image, title1, title2 }) => {
    return (
        <div className="indianbrands">
            <div className="container">
                <div className="indianbrands__info">
                    <p>{title1}<br />{title2}</p>
                </div>
                <div className="indianbrands__image">
                    <img src={image} alt="" />
                </div>
                <div className="indianbrands__details">
                    <Link to="/">
                        <p>See more</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default IndianBrands