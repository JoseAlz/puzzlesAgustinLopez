import   "../productos/item.scss"
import {Button} from "@mui/material"


function Item ({nombre, precio, tamaño, img, stockItem, id}) {
    
    return (
        
        <div >
            <img src={img} className="imgItem"/>
            <h3>{nombre}</h3>
            <p>Precio: $ {precio}</p>
            <p>Tamaño: {tamaño} ml</p>
               
            <Button className="btnDetalle">Ver detalle</Button>
        </div>
        

    )

}
export default Item; 