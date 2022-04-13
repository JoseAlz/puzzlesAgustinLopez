import {createContext, useState} from "react";


const CartContext= createContext();

const CartProvider= ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);
    

    const agregarProductoCarro = (product, cantidad) => {
        let existente= cartProducts.find(cartProducts => cartProducts.id === product.id)
        
        if (!existente) {
            product.cantidad = product.cantidad + cantidad
            setCartProducts(cartProducts =>[...cartProducts, product])
            
        } else {
            product.cantidad = product.cantidad + cantidad
        }
        
    }
    const eliminarProductoCarro = (product) => {
        // for (let i=0; i < cartProducts.length; i++){
        //     if (cartProducts[i].id == product.id){
        //          cartProducts.splice(i,1)

        //     } 
            
        // }
        // return cartProducts
        setCartProducts(cartProducts.filter((cartProducts) => {
            product.cantidad= 0;
            return cartProducts.id !== product.id

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
       
        
    }
    

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}
export { CartProvider }
export default CartContext