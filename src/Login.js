import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './styledocs/Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {

        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate('/');
            })
            .catch((error) => {
                alert(error.message);
            });

    }
    const register = (e) => {

        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error =>
                alert(error.message));
    }

    return (
        <div className='login'>
            <Link to="/">
                <img
                    className="login__logo" alt='amazon logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        className='login__signInButton'
                        type='submit'
                        onClick={signIn}
                    >
                        Sign in
                    </button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                    visit our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button
                    className='login__registerButton'
                    onClick={register}
                >
                    Create your Account
                </button>
            </div>
        </div>
    )
}

export default Login