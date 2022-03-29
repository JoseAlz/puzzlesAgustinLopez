
import ImagenCerveza from "../productos/bebidas/cerveza.jpg"
import ImagenGin from "../productos/bebidas/gin.jpg"
import ImagenFernet from "../productos/bebidas/fernet.jpg"
import ImagenVino from "../productos/bebidas/vino.jpg"
import ImagenWhiskey from "../productos/bebidas/whiskey.jpg"
import ImagenCampari from "../productos/bebidas/campari.jpg"

const productos = [
    {
        id:1,
        nombre:"Cerveza",
        precio:250,
        tamaño :710,
        stock:14,
        imagen: ImagenCerveza,
        detalle: "Cerveza rubia marca Corona"
    },
    {
        id:2,
        nombre:"Gin",
        precio:3050,
        tamaño :710,
        stock:5,
        imagen: ImagenGin,
        detalle: "Gin Tanqueray, ideal para refrescar tu día"
    },
    {
        id:3,
        nombre:"Fernet Branca",
        precio:1250,
        tamaño :710,
        stock:15,
        imagen: ImagenFernet,
        detalle: "El mejor amigo de la coca cola"
    },
    {
        id:4,
        nombre:"Vino",
        precio:450,
        tamaño :710,
        stock:10,
        imagen: ImagenVino,
        detalle: "Vino tinto"
    },
    {
        id:5,
        nombre:"Campari",
        precio:650,
        tamaño :710,
        stock:15,
        imagen: ImagenCampari,
        detalle: "Bebida alcoholica para mezclar con naranja"
    },
    {
        id:6,
        nombre:"Whiskey",
        precio:1250,
        tamaño :710,
        stock:11,
        imagen: ImagenWhiskey,
        detalle: "Mas fuerte que la cachetada de Will"
    },
    


]
export default productos