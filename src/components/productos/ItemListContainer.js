import Item from "./Item";

import Cerveza from "../productos/bebidas/cerveza.jpg";
import Campari from "../productos/bebidas/campari.jpg";
import Fernet from "../productos/bebidas/fernet.jpg";
import Gin from "../productos/bebidas/gin.jpg";
import Whiskey from "../productos/bebidas/whiskey.jpg";
import Vino from "../productos/bebidas/vino.jpg"
function BoxItem () {
    return (
        <div className="boxItem">
            <Item img = {Cerveza} nombre="Cerveza" precio={250} tamaño ={710} />
            <Item img = {Gin} nombre="Gin" precio={3050} tamaño ={710} />
            <Item img = {Fernet} nombre="Fernet Branca" precio={1250} tamaño ={1000} />
            <Item img = {Vino} nombre="Vino" precio={450} tamaño ={710} />
            <Item img = {Campari} nombre="Campari" precio={650} tamaño ={710} />
            <Item img = {Whiskey} nombre="Whiskey" precio={1250} tamaño ={710} />
        </div>
    )
}
export default BoxItem; 
