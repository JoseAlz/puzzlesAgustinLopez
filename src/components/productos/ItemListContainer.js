import dataProducts from "../data/products"
import { useEffect, useState } from "react";
import Item from "./Item"
import "../productos/item.css"
import { Link, useParams } from "react-router-dom"


const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(dataProducts)
        })
    }

    useEffect(() => {
        
        setProducts([])
        return getProducts().then((productos) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
            
            
            
        })

    }, [category])

    const filterProductByCategory = (array, category) => {
        array.map((producto)=> {
            if (category == producto.categoria){
                return setProducts( products => [...products, producto])
            }
        })


    }


    return (
        
        <div className="boxItem">
            
            {
                products.length ? (
                    products.map((producto) => {
                        const { id, nombre, precio, tamaño, imagen, stock, categoria } = producto;
                        if (category) {
                        return (
                            
                            <Link to={`./${id}`}>
                            <div key={id} className="item" >
                                <Item
                                    nombre={nombre}
                                    precio={precio}
                                    tamaño={tamaño}
                                    img={imagen}
                                    stockItem={stock}

                                />
                               
                            </div>
                            </Link>
                        )} 
                        else {
                            return (
                            
                                <Link to={`./${categoria}/${id}`}>
                                <div key={id} className="item" >
                                    <Item
                                        nombre={nombre}
                                        precio={precio}
                                        tamaño={tamaño}
                                        img={imagen}
                                        stockItem={stock}
    
                                    />
                                   
                                </div>
                                </Link>
                            )}

                    }



                    )

                ) : (
                    console.log("Espere, cargando productos...")
                )
            }

        </div>


    )

}
export default ItemListContainer




