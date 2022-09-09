
import { useEffect, useState, useContext } from "react";
import Item from "./Item"
import "../productos/item.scss"
import { Link, useParams, useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ItemContext from "../../context/ItemContext";

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const { getProducts } = useContext(ItemContext)



    useEffect(() => {
        setLoading(true)
        setProducts([])


        getProducts().then((productos) => {
            setLoading(false)



            filterProductByCategory(productos, category)


        })


    }, [category])


    const filterProductByCategory = (array, categoria) => {
        const products = array.filter(product => product.categoria === categoria);


        products.length > 0 ? setProducts(products) : navigate("error-404")

    };




    return (
        <>

            <h1>{category.toUpperCase()}</h1>
            <div className="boxItem">


                {
                    !loading ? (
                        products.map((producto) => {
                            const { id, nombre, precio, tamaño, imagen, stock } = producto;
                            return (
                                (
                                    <Link to={`./${id}`} key={id}>
                                        <div className="item" >
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

                            )
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




