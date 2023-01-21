import './styledocs/App.css';
import Layout from './Layout';
import Home from './Home';
import Checkout from './Checkout';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Frontpage from './Frontpage';
import Orders from './Orders';

const promise = loadStripe("pk_test_51MHmKjSHLMvhhoCpCeNmkQ62gLnuh3YnuLtRyBsYaGSVhx7jqBmD2W1WpDU3whHEwpr9Qwjv6PYMliyJ0M00l8h0002dMPe4Y8");
function App() {

  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log(`the user is >>> ${authUser ? authUser.email : "no user"}`);
      if (authUser) {
        dispatch({
          user: authUser,
          type: 'SET_USER',
        })
      }
      else {
        dispatch({
          user: null,
          type: 'SET_USER',
        })
      }
    })
  }, [])

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Frontpage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="payment" element={(
          <Elements stripe={promise}>
            <Payment />
          </Elements>)}
        />
        <Route path="home" element={<Home />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>

  );
}

export default App;
