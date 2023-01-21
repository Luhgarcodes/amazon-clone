const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MHmKjSHLMvhhoCpuRaittFPO7PuvdGa7wPdX9nPfCMqo6Rnmsu0k64mt5NXjsn5J0bU2BNQFnrdiW4dqQTwC2c600B68jzGXU');



// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
console.log("server is called first ")

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>>############################################################## ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
        description: 'One-time setup fee',
        payment_method_types: ['card'],

    });
    console.log('serever response have sent')
    // OK - Created
    response.status(201).send(
        {
            clientSecret: paymentIntent.client_secret,
        }

    );


});


// - Listen command
exports.api = functions.https.onRequest(app);


