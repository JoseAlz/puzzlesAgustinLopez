const functions = require("firebase-functions");
const express = require("express");
const app = express();
// const cors = require("cors"){
//     origin: [

//     ]
// }

const mercadopago = require("mercadopago");
mercadopago.configure({
  access_token: "APP_USR-7200221269896601-050319-ec1e55f44f765d932fc5ccd6e8e2f41c-1110897846"
});

//routes 
app.post('/checkout', (req, res) => {
    
    let preference = {
        items: [
          {
            title:req.body.title,
            unit_price: parseInt(req.body.price),
            quantity: 1,
          }
        ],
        back_urls: {
          success: "https://puzzles-65bfd.web.app",
          failure: "https://puzzles-65bfd.web.app",
          pending: "https://puzzles-65bfd.web.app",
          },
      };

      mercadopago.preferences.create(preference)
      .then(function(response){
      
        res.redirect(response.body.init_point);
       
      }).catch(function(error){
        console.log(error);
      });

});


exports.app = functions.https.onRequest(app)


// const {procesoDePago} = require("./controladores/pago")


// app.post("/process_payment", procesoDePago)

// exports.web= functions.https.onRequest(app)










// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
