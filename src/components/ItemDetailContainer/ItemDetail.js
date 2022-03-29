
import "../ItemDetailContainer/itemDetail.css"

const ItemDetail = ({image, name, price, detail}) => {
    
    return (
        <div className="itemDetail">
            <img src={image} className="imgItemDetail"/>
            <div className="textItemDetail">
            <h3>Producto: {name}</h3>
            <p>Precio: $ {price}</p>
            <p>Detalle: {detail}</p>
            </div>
        
            
        </div>

    )

}
export default ItemDetail