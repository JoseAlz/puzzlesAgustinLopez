
import { useEffect, useState, useContext } from "react";
import Item from "./Item"
import "../productos/item.css"
import { Link, useParams, useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import db from "../../firebase"
import { collection, getDocs } from "firebase/firestore";
import ItemContext from "../../context/ItemContext";

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // const {getProducts} = useContext(ItemContext)

    const getProducts = async () => {

        const itemCollection = collection(db, "bebidas")
        const productsSnapshot = await getDocs(itemCollection)
        const itemList = productsSnapshot.docs.map((item) => {
            const product = item.data()
            product.id = item.id

            return product


        })
        return itemList

    }

    useEffect(() => {
        setLoading(true)
        setProducts([])


        return getProducts().then((productos) => {

            setLoading(false)

            filterProductByCategory(productos, category)







        })

    }, [category])

    const filterProductByCategory = (array, categoria) => {

        
        array.map((producto) => {
            if (categoria == producto.categoria) {
                
                return setProducts(products => [...products, producto])
            } 
        })


    }


    return (
        <>




            <h1>{category.toUpperCase()}</h1>
            <div className="boxItem">


                {
                    !loading ? (
                        products.map((producto) => {
                            const { id, nombre, precio, tamaño, imagen, stock, categoria } = producto;
                            console.log(categoria)
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
                                )
                            }

                        }



                        )

                    ) : (


                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    )
                }

            </div>

        </>
    )

}
export default ItemListContainer




