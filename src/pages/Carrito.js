import { useContext, useState, } from "react"
import CartContext from "../context/CartContext"
import { Container, Button, Modal } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "../pages/styles/Carrito.scss"
import { Link, useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const CartPage = () => {
    const navigate = useNavigate()
    const { cartProducts, setCartProducts, eliminarProductoCarro, calcTotal } = useContext(CartContext);
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState(
        {

            name: "",
            phone: "",
            email: "",

        }
    )
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((product) => {
                return {
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.cantidad,
                    id: product.id,
                }
            }),
            total: calcTotal()
        }

    )

    const [orderGenerada, setOrderGenerada] = useState()
    const [loading, setLoading] = useState(true)


    const enviarOrder = async () => {
        const docRef = await addDoc(collection(db, "ordenes"), { ...order, buyer: formData });
        console.log("orden pusheada", docRef.id)
        setOrderGenerada(docRef.id)

    }



    const addOrder = () => {
        setOpenModal(true)
    }

    const infoComprador = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    const formSubmit = (e) => {

        e.preventDefault()
        setOrder({
            ...order,
            buyer: formData
        })
        enviarOrder()

        setLoading(false)

    }
    const cerrarCarrito = () => {

        navigate("/")
        setCartProducts([])

    }
    return (
        <>
            <h1>Carrito</h1>
            {
                cartProducts.length ? (

                    <div>
                        {cartProducts.map((product) => {
                            return (
                                <Container className="itemBox" key={product.id}><img src={product.imagen} />
                                    <p>Producto: {product.nombre}</p>
                                    <p>Precio: $ {product.precio}</p>
                                    <p>Cantidad: {product.cantidad}</p>
                                    <Button onClick={() => eliminarProductoCarro(product)} ><DeleteIcon className="btnDeleteItem" /></Button>
                                </Container>)

                        })}

                        <Container className="finBox">
                            <h4>TOTAL: $ {calcTotal()}</h4>
                            <Button className="btnFinCompra" onClick={addOrder}>FINALIZAR COMPRA</Button>
                        </Container>

                    </div>

                ) : (
                    <div className="cartVacio">
                        <p>
                            No hay productos en el carrito, para comprar agregue productos
                        </p>
                        <Link to={"/"} ><Button className="btnVolver">Productos</Button></Link>
                    </div>
                )


            }





            <Modal onClose={() => setOpenModal(false)} open={openModal}>

                {
                    loading ? (
                        <div className="formCompra">
                            <h2>Formulario de compra</h2>
                            <form onSubmit={formSubmit}>
                                <input type="text" name="name" placeholder="Nombre completo" onChange={infoComprador}
                                    value={formData.name} />
                                <input type="number" name="phone" placeholder="Telefono" onChange={infoComprador}
                                    value={formData.phone} />
                                <input type="mail" name="email" placeholder="Correo electrónico" onChange={infoComprador} value={formData.email} />
                                <Button type="submit">Enviar</Button>
                            </form>

                        </div>

                    ) : (
                        !orderGenerada ? (
                            <Box className="loadingOrder" sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            <div className="formCompraRealizada">
                                <h3> Muchas gracias por su compra! Su orden se ha generado exitosamente</h3>
                                <p>Su numero de identificación es: <span className="orderId">{orderGenerada}</span></p>
                                <Button onClick={cerrarCarrito}>Cerrar</Button>
                            </div>)


                    )
                }
            </Modal>
            {console.log("order:", order)}
        </>
    )


}

export default CartPage 