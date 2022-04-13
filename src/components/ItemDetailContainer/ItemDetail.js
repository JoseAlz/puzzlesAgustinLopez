
import "../ItemDetailContainer/itemDetail.css"


const ItemDetail = (product) => {

    const { name, image, detail, price, stock, id } = product
    


    return (
        
            
                <>

                    <div className="imgDetail">
                        <img src={image} alt="imagenDetail" />
                    </div>
                
                
                    <div className="textoDetail">
                        <h4>Producto: {name}</h4>
                        <p> Descripción: {detail}</p>
                        <p> Precio: $ {price} </p>
                        
                        
                            
                        

                    </div>

                    </>





    )

}
export default ItemDetail