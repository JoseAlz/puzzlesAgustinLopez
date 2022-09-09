import {createContext, useState} from "react";


const CartContext= createContext();

const CartProvider= ({children}) =>{
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("productos")) || []);
    const reloadStore = (i) => { localStorage.setItem("productos", JSON.stringify(i))}
     
    const agregarProductoCarro = (product, cantidad) => {
        let existente= cartProducts.find(cartProducts => cartProducts.id === product.id)
        
        if (!existente) {
            product.cantidad = product.cantidad + cantidad
            setCartProducts(cartProducts =>[...cartProducts, product])
            localStorage.setItem("productos", JSON.stringify([...cartProducts, product]))
        } else {
            product.cantidad = product.cantidad + cantidad
        }
        
    }

    const eliminarProductoCarro = (product) => {
        
        
        setCartProducts(cartProducts.filter((cartProduct) => {
            product.cantidad= 0;
            localStorage.removeItem("productos")
            
            return cartProduct.id !== product.id
            

        } ))
        
        
        
        
        
        
    }
    const calcTotal= () => {
        let total = 0
        cartProducts.map((cartProduct)=> {
            total = cartProduct.precio * cartProduct.cantidad + total

        })
        return total
    }
    
   





    const data= {
        cartProducts,
        agregarProductoCarro,
        eliminarProductoCarro,
        calcTotal,
        setCartProducts,
        reloadStore,
        
    }
    

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}
export { CartProvider }
export default CartContext