import {createContext, useState} from "react";


const CartContext= createContext();

const CartProvider= ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);
    

    const agregarProductoCarro = (producto) => {
        console.log("asd" + producto)
        
    }
    
    const data= {
        cartProducts,
        agregarProductoCarro,
    }
    

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}
export { CartProvider }
export default CartContext