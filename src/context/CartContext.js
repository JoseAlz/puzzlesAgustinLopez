import {createContext, useState} from "react";


const CartContext= createContext();

const CartProvider= ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);
    

    const agregarProductoCarro = (product, cnt) => {
        let existente= cartProducts.find(cartProducts => cartProducts.id === product.id)
        
        if (!existente) {
            
            setCartProducts(cartProducts =>[...cartProducts, product])
            cnt= product.cantidad ++
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
            total = cartProduct.precio  + total

        })
        return total
    }
    
    const clickSumar = (cantidad) => {
        cartProducts.map((product)=>{
            let sumaCantidad= product.cantidad+1
            return sumaCantidad;
        })
    }






    const data= {
        cartProducts,
        agregarProductoCarro,
        eliminarProductoCarro,
        calcTotal,
        clickSumar
        
    }
    

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}
export { CartProvider }
export default CartContext