import React from 'react'
import { Link } from "react-router-dom";
import './styledocs/Department.css'

const Department = ({ title, image1, image2, image3, image4, tag1, tag4, tag3, tag2 }) => {
    return (
        <div className="department">

            <p className="department__info" >{title}</p>

            <div className='department__container'>
                <span className="department__image">
                    <span className='image__row11'>
                        <Link to='/home'>
                            <img src={image1} alt="" />
                            <p className='container__tag'>{tag1}</p>
                        </Link>
                    </span>
                    <span className='image__row11 left__img'>
                        <Link to='/home'>
                            <img src={image2} alt="" />
                            <p className='container__tag'>{tag2}</p>
                        </Link>
                    </span>
                </span>
                <span className="department__image">
                    <span className='image__row11'>
                        <Link to='/home'>
                            <img src={image3} alt="" />
                            <p className='container__tag'>{tag3}</p>
                        </Link>
                    </span>
                    <span className='image__row11 left__img'>
                        <Link to='/home'>
                            <img src={image4} alt="" />
                            <p className='container__tag'>{tag4}</p>
                        </Link>
                    </span>
                </span>


            </div>

            <Link to="/home">
                <p className="department__details">See more</p>
            </Link>


        </div>
    )
}

export default Department