import React, { useEffect, useState } from 'react'
import './styledocs/Frontpage.css'
import Department from './Department'
// import SignUpHome from './SignUpHome'
import Banner from './Banner';
import IndianBrands from './IndianBrands';
import { handleBackground } from "./reducer";

const Frontpage = () => {
    const [back, setBack] = useState("https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg");


    var iw;
    var [width, setWidth] = useState(window.innerWidth)
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (width < 1116) {
            setDisplay(true);
        } else if (width > 1116) {
            setDisplay(false);
        }
    }, [width])

    window.onresize = reportWindowSize;

    function reportWindowSize() {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        setInterval(() => {
            var img = handleBackground();
            img = "https://" + `${img}`;
            // console.log(img);
            setBack(img);
        }, 12000);
    }, [])
    return (
        <div className="frontpage">
            <div className="frontpage__container">

                <img className="frontpage__image" src={back} alt="" />
                <div className="frontpage__row">

                    <Department
                        title="Redefine your living room"
                        image1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg'
                        image2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg'
                        image3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg'
                        image4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg'
                        tag1='chairs & tables'
                        tag2='sofa view'
                        tag3='Bean bags'
                        tag4='Explore all'

                    />
                    <Department
                        title="Upgrade your home"
                        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_11._SY116_CB606110532_.jpg'
                        image2='https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_AC_Fridge._SY116_CB620369430_.jpg'
                        image3='https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_4._SY116_CB606110532_.jpg'
                        image4='https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_2._SY116_CB606110532_.jpg'
                        tag1='Smart LEDs'
                        tag2='Appliances'
                        tag3='Furniture'
                        tag4='Kitchen Products'
                    />
                    <Department
                        title="Professional Tools"
                        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg'
                        image2='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg'
                        image3='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg'
                        image4='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg'
                        tag1='Professional Tools'
                        tag2='Instrument'
                        tag3='Cleaning Supplies'
                        tag4='Medical Supplies'
                    />
                    <Department
                        title="Professional Tools"
                        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg'
                        image2='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg'
                        image3='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg'
                        image4='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg'
                        tag1='Professional Tools'
                        tag2='Instrument'
                        tag3='Cleaning Supplies'
                        tag4='Medical Supplies'
                    />
                    <Department
                        title="Offers on travel tickets"
                        image1='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Flight_186x116._SY116_CB618818544_.jpg'
                        image2='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Train_186x116._SY116_CB618818544_.jpg'
                        image3='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Bus_186x116._SY116_CB618818544_.jpg'
                        image4='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Accessory_186x116._SY116_CB618818544_.jpg'
                        tag1='Get offers on flight'
                        tag2='Convenience on tickets'
                        tag3='Rewards on tickets'
                        tag4='Travel Products'
                    />
                    <Department
                        title="Spread christmas cheer"
                        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/186x116_2._SY116_CB617724720_.jpg'
                        image2='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/186x116_3._SY116_CB617724720_.jpg'
                        image3='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/186x116_1._SY116_CB617724720_.jpg'
                        image4='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/186x116_4._SY116_CB617724720_.jpg'
                        tag1='Home decor'
                        tag2='Secret santa gifts'
                        tag3='Baking essentials'
                        tag4='Visit Christmas store'
                    />
                    <Department
                        title="Automotive essentials"
                        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg'
                        image2='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg'
                        image3='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg'
                        image4='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg'
                        tag1='Cleaning accessories'
                        tag2='Tyre & Rim'
                        tag3='Helmets'
                        tag4='Vaccum cleaner'
                    />
                    <Department
                        title='Shop by Category'
                        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg'
                        image2='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg'
                        image3='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg'
                        image4='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg'
                        tag1='fresh'
                        tag2='Mobiles'
                        tag3='Fashion'
                        tag4='Electronics'
                    />
                    {display && <Department
                        title="Redefine your living room"
                        image1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg'
                        image2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg'
                        image3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg'
                        image4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg'
                        tag1='chairs & tables'
                        tag2='sofa view'
                        tag3='Bean bags'
                        tag4='Explore all'
                    />}

                </div>
                <div className="frontpage__row">
                    <Banner
                        image='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg'
                    />
                </div>
                <div className="frontpage__row">
                    <IndianBrands
                        image='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/DeskCC-379x304_CRUSHED-S2_V2._SY304_CB620412632_.jpg'
                        title1='New Series CRUSHED |'
                        title2=' Watch FREE on miniTV'
                    />
                    <IndianBrands
                        image='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img22/Christmas/GW/PC_CC_1X._SY304_CB618891376_.jpg'
                        title1='Everything you need for '
                        title2='the perfect Christmas'
                    />
                    <IndianBrands
                        image='https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/DEC_GW/Grocery_PC_CC_379X304._SY304_CB620688365_.jpg'
                        title1='Everyday grocery products '
                        title2='| Amazon Launchpad'
                    />
                    <IndianBrands
                        image='https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/BTF_Nov22_1x._SY304_CB618822015_.png'
                        title1='Sell on Amazon with 1-'
                        title2='Click Launch Support'
                    />
                    {display && <>
                        <IndianBrands
                            image="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img20/Events/GWBdaystore/Birthday_PC_CC_1x._SY304_CB663001103_.jpg"
                            title1='For all birthday gifting and celebration needs'
                            title2='Click Launch Support'
                        />
                        <IndianBrands
                            image="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/PW_desk_final1._SY304_CB617816412_.jpg"
                            title1='Based on true story of Alakh Pandey | miniTV'
                            title2='Click Launch Support'
                        />
                    </>}
                </div>
                <div className="frontpage__row">
                    <Banner
                        image="https://m.media-amazon.com/images/G/31/img19/AmazonPay/Kartik/R2UC/Shopping/LPA/Revised/PC_Dashboard_770x150_LPA._CB647720738_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Frontpage