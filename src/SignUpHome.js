import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styledocs/SignUpHome.css'


const SignUpHome = () => {
    const navigate = useNavigate();
    return (
        <div className="homesignup">
            <div className="homesignup__container">

                <div className="homesignup__container1 signupDesign">
                    <p>Sign in for your best experience</p>

                    <button onClick={e => navigate('/login')}>Signup</button>
                </div>
                <div className='"homesignup__container1"'>

                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Revamp/popularseries/poplarseries_copy_7.jpg" alt="" />

                </div>

            </div>
        </div>
    )
}

export default SignUpHome