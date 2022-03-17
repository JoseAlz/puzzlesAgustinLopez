import {FaShoppingCart} from "react-icons/fa";

import Button from '@mui/material/Button';
function CartWidget () {
    return (
        

        <Button> <FaShoppingCart className="iconoCart"/> <span className="cantidadCart">1</span></Button>
       
        
    )
}
export default CartWidget 