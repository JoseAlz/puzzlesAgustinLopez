import {Button} from "@mui/material"
import { Link } from "react-router-dom"
import "./styles/404.scss"
const NotPageFound = () => {
    return (
        <div className="error404">
            <h1>
                ERROR 404! 
            </h1>
            <p>La dirección a donde se quiere dirigir no existe. <br />Por favor vuelva a la pagina principal.</p>
            <Link to={"/"}><Button variant="contained">Volver</Button></Link>
        </div>
    )
}
export default NotPageFound