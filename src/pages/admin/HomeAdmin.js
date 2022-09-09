import db from "../../firebase"
import ItemContext from "../../context/ItemContext"
import { useContext, useEffect, useState } from "react"
import {  Button } from "@mui/material"
import {  doc,  collection, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { storage } from "../../firebase"
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { auth } from "../../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";


/*style*/
import "./styles/HomeAdmin.scss"
import { useNavigate } from "react-router-dom"



const HomeAdmin = () => {
    const { getProducts } = useContext(ItemContext);
    const [productos, setProductos] = useState([]);
    const [logueado, setLogueado] = useState(false);
    const navigate = useNavigate()
    let urlDescarga
    /* Carga nuevo producto */
    const [nuevoProducto, setNuevoProducto] = useState({
        nombre: "",
        precio: parseInt(""),
        categoria: "",
        descripcion: "",
        imagen: "",
        stock: parseInt(""),
        cantidad: 0,
        tamaño: parseInt(""),

    })


    const agregarProducto = async (e) => {
        e.preventDefault();
        const { nombre, precio, categoria, descripcion, stock, cantidad, tamaño, recomendado } = nuevoProducto
        const docRef = await addDoc(collection(db, "bebidas"), {
            nombre: nombre,
            precio: parseInt(precio),
            categoria: categoria,
            descripcion: descripcion,
            imagen: urlDescarga,
            stock: parseInt(stock),
            cantidad: cantidad,
            tamaño: parseInt(tamaño),
            recomendado:Boolean(recomendado)

        });

        console.log("Nuevo producto agregado ID: ", docRef.id)

        
       
    }

    const [nuevosValores, setNuevosValores] = useState(
        {
            precio: "",
            stock: "",
        }
    )

    const onChangeValores = (e) => {
        e.preventDefault()


        setNuevosValores({
            ...nuevosValores,
            [e.target.name]: e.target.value,

        })
        console.log(nuevosValores)
    }



    const editarProducto = async (id) => {

        const productosList = doc(db, "bebidas", `${id}`);

        await updateDoc(productosList, {
            precio: parseInt(nuevosValores.precio),
            stock: parseInt(nuevosValores.stock),
        });

        console.log("Producto editado correctamente")
    }

    const eliminarProducto = async (id) => {
        const productosList = doc(db, "bebidas", `${id}`);
        await deleteDoc(productosList)
        console.log("Producto eliminado")
        navigate("/panel-admin")
    }


    const handleChange = (e) => {

        setNuevoProducto({
            ...nuevoProducto,
            [e.target.name]: e.target.value
        })



    }

    const fileHandle = async (e) => {
        const file = e.target.files[0]
        const archivoRef = ref(storage, `productos/${file.name}`)
        await uploadBytes(archivoRef, file)
        urlDescarga = await getDownloadURL(archivoRef)


    }


    useEffect(() => {
        getProducts().then((items) => {

            return setProductos(items)


        })
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogueado(true)
            } else {
                setLogueado(false)
            }
        });
    }, [])
    return (
        <>

            {
                logueado ?
                    (
                        <>
                            <div className="panelDeControl">
                                <h1> PANEL DE CONTROL</h1>
                                <Button variant="contained" className="btnCerrarSesion"
                                    onClick={() => signOut(auth)}>Cerrar sesión</Button>
                            </div>
                            <div className="boxAgregarProducto">
                                <h2>Agregar producto</h2>
                                <form onSubmit={agregarProducto}>
                                    <label>Ingrese el nombre del producto</label>
                                    <input type="text"
                                        placeholder="nombre"
                                        name="nombre"
                                        required
                                        onChange={handleChange}
                                    />
                                    <label>Ingrese el precio</label>
                                    <input type="number"
                                        placeholder="precio"
                                        name="precio"
                                        required
                                        onChange={handleChange}
                                    />
                                    <label>Ingrese categoria del producto</label>

                                    <select name="categoria"
                                        required
                                        onChange={handleChange}>
                                        <option>Eliga la categoria de la bebida</option>
                                        <option>cervezas</option>
                                        <option>aperitivos</option>
                                        <option>vinos</option>
                                        <option>champagne</option>
                                        <option>whiskeys</option>
                                        <option>gaseosas</option>
                                    </select>

                                    <label>Ingrese la descripción del producto</label>
                                    <input
                                        type="text"
                                        placeholder="descripcion"
                                        name="descripcion"
                                        required
                                        onChange={handleChange}
                                    />

                                    <label>Ingrese la cantidad de stock</label>
                                    <input type="number"
                                        placeholder="stock"
                                        name="stock"
                                        required
                                        onChange={handleChange}
                                    />
                                    <label>Ingrese el tamaño en ml</label>
                                    <input type="number"
                                        placeholder="tamaño"
                                        name="tamaño"
                                        required
                                        onChange={handleChange}
                                    />
                                    <label>Producto recomendado</label>
                                    <input type="checkbox" 
                                    id="recomendado" 
                                    name="recomendado" 
                                    onChange={handleChange}
                                    value={true} /> 
                                    

                                    <label>Ingrese la imagen del producto</label>
                                    <div className="btnAgregarImagen">
                                        
                                        <input
                                            aria-label="Archivo"
                                            type="file"
                                            placeholder="Agrega imagen"
                                            onChange={fileHandle}
                                            required
                                        /></div>




                                    <Button type="submit" variant="contained" className="btnAgregarProducto">Agregar producto</Button>


                                </form>

                            </div></>)
                    : (
                        navigate("/")

                    )
            }
            <h1>Listado de productos</h1>
            <div className="Items">

                {
                    productos.map((producto) => {
                        return (

                            <div className="boxEditarItem" >

                                <img src={producto.imagen} />
                                <p className="nombreItem"> {producto.nombre} </p>

                                <label>Ingrese nuevo precio</label>
                                <input placeholder="Precio" type="number" required id="precio" name="precio" onChange={onChangeValores} />
                                <label>Ingrese cantidad stock</label>
                                <input placeholder="Stock" type="number" required id="stock" name="stock" onChange={onChangeValores} />

                                <div className="btns">
                                    <Button variant="contained" className="btnEliminarItem" onClick={() => eliminarProducto(producto.id)}>Eliminar</Button>

                                    <Button variant="contained" className="btnEditarItem" onClick={() => editarProducto(producto.id)}>Editar</Button>
                                </div>
                            </div>
                        )


                    })
                }

            </div>


        </>
    )

}


export default HomeAdmin