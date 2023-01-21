import React from 'react'
import './styledocs/Home.css'
import Product from './Product'
import Banner from './Banner';

const Home = () => {

    return (
        <div className="home">
            <div className="home__container">

                <Banner
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/laptop/hp/pavilion/1500x300.jpg"
                />
                <div className="home__row">
                    <Product
                        id="1"
                        title='Think and Grow Rich (Deluxe Hardbound Edition)'
                        price={3790}
                        image='https://m.media-amazon.com/images/I/81lr6LSKvKS._AC_UY218_.jpg'
                        rating={5}
                    />
                    <Product
                        id="7"
                        title='Samsung 700 L Inverter Frost Free Side-by-Side Refrigerator'
                        price={42938}
                        image='https://m.media-amazon.com/images/I/31kf3LSs4yL._SX342_SY445_QL70_FMwebp_.jpg'
                        rating={4}
                    />
                    <Product
                        id="8"
                        title='IFB 7 Kg 5 Star Front Load Washing Machine 2X Power Dual Steam'
                        price={15655}
                        image='https://m.media-amazon.com/images/I/61k+UNF4lpL._SY679_.jpg'
                        rating={5}
                    />
                    <Product
                        id="2"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater"
                        price={2390}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71trhOsnpnS._SX569_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title="Apple Watch SE (GPS + Cellular, 40mm) - Gold Aluminium Case with Starlight Sport Band"
                        price={19999}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71lU6IcsUcL._SL1500_.jpg"
                    />
                    <Product
                        id="4"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={9899}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="5"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={59899}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={109498}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;