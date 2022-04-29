import { useContext, useEffect, useState } from "react"
import Portada from "../components/Portada/Portada"
import ItemContext from "../context/ItemContext"
import Item from "../components/productos/Item"
import { Grid } from "@mui/material"
import { Link } from "react-router-dom"
import "./styles/Home.scss"
import EmblaCarousel from "../components/Carousel/EmblaCarousel"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const HomePage = () => {
    const { getProducts } = useContext(ItemContext)
    const [products, setProducts] = useState([])

    const filterProductRecommendaded = (array, recomendado) => {
        array.map((producto) => {
            if (producto.recomendado == true) {
                return setProducts(products => [...products, producto])
            }
        })


    }
    useEffect(() => {



        return getProducts().then((productos) => {


            filterProductRecommendaded(productos)



        })

    }, [])

    const SLIDE_COUNT = 5;
    const slides = Array.from(Array(SLIDE_COUNT).keys());


    return (


        <>
           <EmblaCarousel slides={slides} />
           <div className="boxInfo">
                <div>
                    <LocalShippingIcon /> 
                    <p>ENVIOS A DOMICILIO</p>
                </div>
                <div>
                    <LockIcon />
                    <p>DATOS 100% PROTEGIDOS</p>
                </div>
                <div>
                    <WhatsAppIcon />
                    <p>3512405823</p>
                </div>
           </div>
            <Portada />
            <Grid>
                <h1>Productos más vendidos</h1>
                <div className="boxRecomendados">
                    {
                        products.map((product) => {
                            const { id, nombre, precio, tamaño, imagen, stock, categoria } = product;


                            return (

                                <Link to={`/${categoria}/${id}`}>
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
                        )
                    }
                </div>
            </Grid>


        </>

    )
}
export default HomePage