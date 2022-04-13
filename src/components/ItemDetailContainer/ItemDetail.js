
import "../ItemDetailContainer/itemDetail.css"
import {Container, Grid, Button} from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"
import {useContext, useEffect, useState} from "react";
import CartContext from "../../context/CartContext";
import productos from "../data/products";


const ItemDetail = ( {name, image, detail, price, stock, id,}) => {
    
    const [ contador, setContador ] = useState(-1)

    const {agregarProductoCarro} = useContext(CartContext)
    
    const addProduct = (cant) => {
        setContador(cant)
        agregarProductoCarro({cantidad: cant})
        
        
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
                        <ItemCount stock={stock}  addProduct={addProduct}/>
                        
                            
                        

                    </div>
                </Grid>

                

            </Grid>

        </Container>
    )

}
export default ItemDetail