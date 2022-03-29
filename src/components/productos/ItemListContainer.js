import dataProducts from "../data/products"
import { useEffect, useState } from "react";
import Item from "./Item"
import "../productos/item.css"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const getProducts = () => {

        return new Promise((resolve, reject) => {
            return resolve(dataProducts)
        })
    }

    useEffect(() => {
        setTimeout(() => {
            return getProducts().then((productos) => {
                setProducts(productos)
                
            })
        }, 2000)
    }, [])

    return (
        
        <div className="boxItem">

            {
                products.length ? (
                    products.map((producto) => {
                        const { id, nombre, precio, tamaño, imagen, stock } = producto;
                        return (
                            <div key={id} >
                                <Item
                                    nombre={nombre}
                                    precio={precio}
                                    tamaño={tamaño}
                                    img={imagen}
                                    stockItem={stock}
                                    
                                />
                                
                            </div>

                        )

                    }



                    )

                ) : (
                    <p>Espere, cargando productos...</p>
                )
            }
           
        </div>
        

    )

}
export default ItemListContainer




