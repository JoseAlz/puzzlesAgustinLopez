import   "../productos/item.css"


function Item ({nombre, precio, tamaño, img}) {
    return (
        <div className="item">
            <img src={img} className="imgItem"/>
            <h3>{nombre}</h3>
            <p>Precio: $ {precio}</p>
            <p>Tamaño: {tamaño} ml</p>
            
        </div>

    )

}
export default Item; 