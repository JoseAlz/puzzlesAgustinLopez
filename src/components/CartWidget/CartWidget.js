import {FaShoppingCart} from "react-icons/fa";
import Button from '@mui/material/Button';
// import {useContext} from "react"
// import CartContext from "../../context/CartContext";


function CartWidget () {
    // const [cart, Clickbtn] = useContext(CartContext)
    
    
    return (
        

        <Button  > <FaShoppingCart className="iconoCart"/> <span className="cantidadCart">1</span></Button>
       
        
    )
}
export default CartWidget 