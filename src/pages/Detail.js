

import { useEffect, useState, useContext } from "react"
import "./styles/DetailStyle.scss"
import CartContext from "../context/CartContext"
import ItemDetail from "../components/ItemDetailContainer/ItemDetail"
import { Button, Container, Grid } from "@mui/material"
import ItemCount from "../components/ItemCount/ItemCount"
import db from "../firebase"
import {doc, getDoc} from "firebase/firestore"
import { useParams, useNavigate } from "react-router-dom"

const DetailPage = () => {
    const { cartProducts, agregarProductoCarro } = useContext(CartContext)
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    const getProducts = async () => {
        const docRef = doc(db, "bebidas", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            navigate("/error-404")
            
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
            <Container className="containerItemDetail">
                <Grid container className="detailItem" key={product.id}>
                    <ItemDetail
                        imagen={product.imagen}
                        name={product.nombre}
                        price={product.precio}
                        detail={product.descripcion}
                        stock={product.stock}
                        size={product.tamaño}

                    />


                    <ItemCount stock={product.stock} addProduct={addtoCart} />
                </Grid>
            </Container>

        </div>
    )

}
export default DetailPage