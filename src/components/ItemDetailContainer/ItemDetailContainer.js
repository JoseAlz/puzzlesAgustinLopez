import React from "react"
import { useState, useEffect } from "react";
import dataProducts from "../data/products"
import "./itemDetail.css"
import ItemDetail from "./ItemDetail";
import Container from "@mui/material/Container"
const ItemDetailContainer = ({item}) => {
    const [itemElegido, setItemElegido] = useState([]);
    const getItem = (i) => {

            return new Promise((resolve, reject) => {
                return resolve(dataProducts[i]);
            })
    }

    useEffect(() => {
        setTimeout(() => {
            return getItem(item).then((value) => {
                setItemElegido(value);
                
                
            })
        }, 2000)
    }, [])

    return (
        <Container>
        <div className="itemElegido">
           {console.log(itemElegido)}
           <ItemDetail 
            image= {itemElegido.imagen}
            name ={itemElegido.nombre}
            price={itemElegido.precio}
            detail={itemElegido.detalle}
           
           />
        
        </div>
        </Container>
    )

}
export default ItemDetailContainer