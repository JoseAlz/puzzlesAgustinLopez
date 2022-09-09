
import "../ItemDetailContainer/itemDetail.css"


const ItemDetail = (product) => {

    const { name, imagen, detail, price, stock, id, size } = product
    


    return (
        
            
                <>

                    <div className="imgDetail">
                        <img src={`${imagen}`} alt="imagenDetail" />
                    </div>
                
                
                    <div className="textoDetail">
                        <h4>Producto: {name}</h4>
                        <p> Descripción: {detail}</p>
                        <p> Tamaño: {size} ml</p>
                        <p> Precio: $ {price} </p>
                        
                        
                            
                        

                    </div>

                    </>





    )

}
export default ItemDetail