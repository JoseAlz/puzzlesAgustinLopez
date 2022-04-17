import dataProducts from "../data/products"
import { useEffect, useState } from "react";
import Item from "./Item"
import "../productos/item.css"
import { Link, useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import db from "../../firebase"
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({children}) => {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        
        const itemCollection = collection(db, "bebidas")
        const productsSnapshot = await getDocs(itemCollection)
        const itemList =  productsSnapshot.docs.map((item) => {
            const product = item.data()
            product.id= item.id
            return product
        })
        
        return itemList
       
        }

    useEffect(() => {
        setLoading(true)
        setProducts([])
        
        return getProducts().then((productos) => {
            setLoading(false);
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
                !loading ? (
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
                    
                    
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                )
            }

        </div>


    )

}
export default ItemListContainer




