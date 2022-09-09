import { createContext, useState } from "react";
import db from "../firebase"
import { collection, getDocs } from "firebase/firestore";


const ItemContext = createContext();

const ItemProvider = ({ children }) => {

    const getProducts = async () => {

        const itemCollection = collection(db, "bebidas")
        const productsSnapshot = await getDocs(itemCollection)
        const itemList = productsSnapshot.docs.map((item) => {
            const product = item.data()
            product.id = item.id
            return product
        })

        return itemList

    }
    

    const data = {
        getProducts,
    }
    return (
        <ItemContext.Provider value={data}>
            {children}
        </ItemContext.Provider>
    )
}
export { ItemProvider }
export default ItemContext
