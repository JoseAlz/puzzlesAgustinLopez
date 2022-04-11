import {createContext, useState} from "react";


const CartContext= createContext();

const CartProvider= ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);
    

    const agregarProductoCarro = (product) => {
        let existente= cartProducts.find(cartProducts => cartProducts.id === product.id)

        !existente && setCartProducts(cartProducts =>[...cartProducts, product])
        
    }
    const eliminarProductoCarro = (product) => {
        setCartProducts(cartProducts.filter((cartProducts) => {
            return cartProducts.id !== product.id

        } ))
        
    }
    const calcTotal= () => {
        let total = 0
        cartProducts.map((cartProduct)=> {
            total = cartProduct.precio + total

        })
        return total
    }
    const data= {
        cartProducts,
        agregarProductoCarro,
        eliminarProductoCarro,
        calcTotal,
        
    }
    

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}
export { CartProvider }
export default CartContext