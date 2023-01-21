import React, { useEffect, useState } from 'react'
import './styledocs/Orders.css'
import { db } from "./firebase";
import Order from "./Order";
import { useStateValue } from './StateProvider';
import './styledocs/Orders.css'


const Orders = () => {
    var v = 1;
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();


    useEffect(() => {

        if (user) {
            console.log(`inside the if block ${user}`);
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy("created", 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }
    }, [user])
    return (
        <div className="orders">
            <h1>orders--called</h1>
            <div className="orders__order">
                {orders.map(order => (

                    <Order
                        key={v + v++}
                        order={order}
                    />
                ))}
            </div>
            <h1>orders--finished</h1>
        </div>
    )
}

export default Orders