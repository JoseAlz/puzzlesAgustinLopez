
import "../ItemDetailContainer/itemDetail.css"
import {Container, Grid, Button} from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"



const ItemDetail = ({image, name, price, detail,stock}) => {
    
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
                        <Link to={"/cart"}><Button  className="btnComprar" >COMPRAR</Button></Link>

                    </div>
                </Grid>

                

            </Grid>

        </Container>
    )

}
export default ItemDetail