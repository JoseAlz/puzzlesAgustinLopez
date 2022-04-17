import dataProducts from "../components/data/products"
import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import "./styles/DetailStyle.scss"
import CartContext from "../context/CartContext"
import ItemDetail from "../components/ItemDetailContainer/ItemDetail"
import { Button, Container, Grid } from "@mui/material"
import ItemCount from "../components/ItemCount/ItemCount"
import db from "../firebase"
import {doc, getDoc} from "firebase/firestore"


const DetailPage = () => {
    const { cartProducts, agregarProductoCarro } = useContext(CartContext)
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    
    const getProducts = async () => {
        const docRef = doc(db, "bebidas", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            console.log("No such document!");
            
          }
    }



    // const filterProduct = () => {

    //     dataProducts.map((product) => {
    //         if (id == product.id) {
    //             return setProduct(product)
    //         }

    //     })
    // }
    const addtoCart = (qty) => {


        agregarProductoCarro(product, qty);


    }
    

    useEffect(() => {
        // filterProduct()
        getProducts()

    }, [id])

    return (
        <div className="boxItem">
            <Container>
                <Grid container className="detailItem">
                    <ItemDetail
                        imagen={product.imagen}
                        name={product.nombre}
                        price={product.precio}
                        detail={product.detalle}
                        stock={product.stock}

                    />


                    <ItemCount stock={product.stock} addProduct={addtoCart} />
                </Grid>
            </Container>

        </div>
    )

}
export default DetailPage