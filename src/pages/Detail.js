import dataProducts from "../components/data/products"
import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import "./styles/DetailStyle.css"
import CartContext from "../context/CartContext"
import ItemDetail from "../components/ItemDetailContainer/ItemDetail"
import { Button } from "@mui/material"

const DetailPage = () => {
    const { cartProducts, agregarProductoCarro } = useContext(CartContext)

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const filterProduct = () => {

        dataProducts.map((product) => {
            if (id == product.id) {
                return setProduct(product)
            }

        })
    }
    const addtoCart = () => {
        console.log(product)

        agregarProductoCarro(product);


    }
    const verProducto = () => {
        console.log(cartProducts)
    }

    useEffect(() => {
        filterProduct()





    }, [id])

    return (
        <div className="boxItem">
            <ItemDetail
                image={product.imagen}
                name={product.nombre}
                price={product.precio}
                detail={product.detalle}
                stock={product.stock}
            />
            <Button onClick={addtoCart} className="btnAgregarCarro" >Agregar al carro</Button>

            {/* <button onClick={verProducto}> ver array carrito</button> */}
        </div>
    )

}
export default DetailPage