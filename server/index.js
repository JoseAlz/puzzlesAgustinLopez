const express = require("express");
const app = express();
const bodyParser= require("body-parser")

//SDK Mercadopago
const mercadopago = require("mercadopago");

//middleware

app.use(bodyParser.urlencoded({ extended: false }))

//credenciales Vendedor (Vendedor Test)

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
        ]
      };

      mercadopago.preferences.create(preference)
      .then(function(response){
      
        res.redirect(response.body.init_point);
       
      }).catch(function(error){
        console.log(error);
      });

});

//server
app.listen(3001, () => {
    console.log("Server on port 3001")

})