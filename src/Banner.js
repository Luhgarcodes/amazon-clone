import React from 'react'
import './styledocs/Banner.css';

const Banner = ({ image }) => {
    return (
        <div className="banner">
            <div className="banner__container">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Banner