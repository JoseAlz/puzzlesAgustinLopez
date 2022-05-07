const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51KulCkKPPOSdlu66dSHcXEgkr8RPhD4GBXv5VAljZhzfQcWrEGkAZ1FonDb2WXUtB78hSxJwVgXaCFcxBmiXimRJ00QGnbtnmY");

const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  // you can get more data to find in a database, and so on
  try {
    const { amount, id } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      payment_method: id,

    })
    console.log(payment)

    res.send("Pago confirmado ")
    
  } catch (error) {
    console.log(error)
    return res.json({ message: error.raw.message })
  }





});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});

