import dataProducts from "../components/data/products"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./styles/DetailStyle.css"

import ItemDetail from "../components/ItemDetailContainer/ItemDetail"

const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const filterProduct = () => {

        dataProducts.map((product) => {
            if (id == product.id) {
                return setProduct(product)
            }

        })
    }

    useEffect(() => {
        return filterProduct()



    }, [id])

    return (
        <ItemDetail
            image={product.imagen}
            name={product.nombre}
            price={product.precio}
            detail={product.detalle}
            stock={product.stock}
        />
        
    )

}
export default DetailPage