import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Container, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import "../pages/styles/Carrito.scss"
import { Link } from "react-router-dom"

const CartPage = () => {

    const { cartProducts, eliminarProductoCarro, calcTotal } = useContext(CartContext);



    return (
        <>
            <h1>Carrito</h1>
            {
                cartProducts.length ? (

                    <div>
                    {cartProducts.map((product) => {
                        return (
                            <Container className="itemBox"><img src={product.imagen} />
                                <p>Producto: {product.nombre}</p>
                                <p>Precio: $ {product.precio}</p>
                                <p>Cantidad: 1</p>
                                <Button ><DeleteIcon className="btnDeleteItem" onClick={() => eliminarProductoCarro(product)} /></Button>
                            </Container>)

                    })}

                    <Container className="finBox">
                        <h4>TOTAL: $ {calcTotal()}</h4>
                        <Button className="btnFinCompra">FINALIZAR COMPRA</Button>
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




        </>
    )


}

export default CartPage 