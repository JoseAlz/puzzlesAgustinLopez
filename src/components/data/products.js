
import ImagenCerveza from "../productos/bebidas/cerveza.jpg"
import ImagenGin from "../productos/bebidas/gin.jpg"
import ImagenFernet from "../productos/bebidas/fernet.jpg"
import ImagenVino from "../productos/bebidas/vino.jpg"
import ImagenWhiskey from "../productos/bebidas/whiskey.jpg"
import ImagenCampari from "../productos/bebidas/campari.jpg"
import ImagenTonica from "../productos/bebidas/paso-de-los-toros.jpg"
import ImagenCocaCola from "../productos/bebidas/coca.jpg"
import ImagenAgua from "../productos/bebidas/agua.jpg"
const productos = [
    {
        id:1,
        nombre:"Cerveza",
        precio:250,
        tamaño :710,
        stock:14,
        imagen: ImagenCerveza,
        categoria: "alcoholica",
        detalle: "Cerveza rubia marca Corona",
        cantidad: 0,
    },
    {
        id:2,
        nombre:"Gin",
        precio:3050,
        tamaño :710,
        stock:5,
        imagen: ImagenGin,
        categoria: "alcoholica",
        detalle: "Gin Tanqueray, ideal para refrescar tu día",
        cantidad: 0,
    },
    {
        id:3,
        nombre:"Fernet Branca ",
        precio:1250,
        tamaño :710,
        stock:15,
        imagen: ImagenFernet,
        categoria: "alcoholica",
        detalle: "El mejor amigo de la coca cola",
        cantidad: 0,
    },
    {
        id:4,
        nombre:"Vino",
        precio:450,
        tamaño :710,
        stock:10,
        imagen: ImagenVino,
        categoria: "alcoholica",
        detalle: "Vino tinto",
        cantidad: 0,
    },
    {
        id:5,
        nombre:"Campari",
        precio:650,
        tamaño :710,
        stock:15,
        imagen: ImagenCampari,
        categoria: "alcoholica",
        detalle: "Bebida alcoholica para mezclar con naranja",
        cantidad: 0,
    },
    {
        id:6,
        nombre:"Whiskey",
        precio:1250,
        tamaño :710,
        stock:11,
        imagen: ImagenWhiskey,
        categoria: "alcoholica",
        detalle: "Mas fuerte que la cachetada de Will",
        cantidad: 0,
    },
    {
        id:7,
        nombre:"Agua",
        precio:100,
        tamaño :500,
        stock:10,
        imagen: ImagenAgua,
        categoria: "comunes",
        detalle: "Agua natural potable, traida de las montañas de Córdoba",
        cantidad: 0,
    },
    {
        id:8,
        nombre:"Coca-Cola",
        precio:300,
        tamaño :1000,
        stock:15,
        imagen: ImagenCocaCola,
        categoria: "comunes",
        detalle: "Gaseosa sabor a Cola, el mejor amigo de Fernet",
        cantidad: 0,
    },
    {
        id:9,
        nombre:"Agua Tonica",
        precio:350,
        tamaño :1000,
        stock:15,
        imagen: ImagenTonica,
        categoria: "comunes",
        detalle: "Acompañante perfecto para el Gin",
        cantidad: 0,
    }
    


]
export default productos