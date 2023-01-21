import { useState, React } from 'react';
import './styledocs/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [search, setSearch] = useState([])
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    const username = (user?.email)
    // console.log(username);

    return (
        <div className='header'>
            <Link to='/'>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo header__border" alt='amazon icon' />
            </Link>


            <div className="header__address header__border">
                <div className="header__location">
                    <LocationOnOutlinedIcon className="header__locationIcon" />
                </div>
                <div className="header__locationOption ">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Select your address</span>
                </div>
            </div>
            <div className="header__search">
                <input
                    type="text"
                    className="header__searchInput"
                    placeholder="Search Items"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option  header__border">
                        <span className="header__optionLineOne">Hello, {username ? (username).slice(0, username.indexOf('@')) : "Guest"}</span>
                        <span className="header__optionLineTwo">{(user) ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option  header__border">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header__option  header__border">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/Checkout">
                    <div className="header__optionBasket header__border">
                        <LocalMallIcon />
                        <span className='header__optionsLineTwo 
                        header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}
export default Header;