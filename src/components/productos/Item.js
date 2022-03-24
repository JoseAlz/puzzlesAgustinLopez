import   "../productos/item.css"
import ItemCount from "../ItemCount/ItemCount";


function Item ({nombre, precio, tamaño, img, stockItem}) {
    
    return (
        
        <div className="item">
            <img src={img} className="imgItem"/>
            <h3>{nombre}</h3>
            <p>Precio: $ {precio}</p>
            <p>Tamaño: {tamaño} ml</p>
            <p>Stock: {stockItem}</p>
            <ItemCount stock={stockItem}/>   
            
        </div>

    )

}
export default Item; 