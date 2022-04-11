
import "../ItemDetailContainer/itemDetail.css"
import {Container, Grid, Button} from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"
import {useContext, useEffect} from "react";


const ItemDetail = ( {name, image, detail, price, stock, id,}) => {
    
    
    const addProduct = (cant) => {
       
         alert (`Has agregado ${cant} producto`)  
        
    }
    
    

    return (
        <Container>
            <Grid container className="boxDetail">
                <Grid md={6} sm={12} >

                    <div className="imgDetail">
                        <img src={image} alt="imagenDetail" />
                    </div>
                </Grid>
                <Grid md={6} sm={12}>
                    <div className="textoDetail">
                        <h4>Producto: {name}</h4>
                        <p> Descripción: {detail}</p>
                        <p> Precio: $ {price} </p>
                        <ItemCount stock={stock} addProduct={addProduct}/>
                        
                            {/* <Button  className="btnComprar" onClick={addtoCart}  >COMPRAR</Button> */}
                        

                    </div>
                </Grid>

                

            </Grid>

        </Container>
    )

}
export default ItemDetail