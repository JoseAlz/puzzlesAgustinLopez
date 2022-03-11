import Logo from "../Img/logo.png";
import {FaInstagram } from "react-icons/fa"
import Button from '@mui/material/Button';
import "../components/styleNavBar.css";

function NavBar() {
    return (

        <div className="headerBox">
            <header>
                <nav>
                    <img src={Logo} className="logoNav" />
                        <div className="btnNav">
                        <Button className="btn" variant="outlined">Inicio</Button>
                        <Button className="btn" variant="outlined">Productos</Button>
                        <Button className="btn" variant="outlined">Reservas</Button>
                        <Button className="btn" variant="outlined">Contacto</Button>
                        </div>
                   
                    <div className="iconosNav">
                        <Button > <FaInstagram className="iconoIG" /> </Button>

                    </div>

                </nav>

            </header>
        </div>


    )
}
export default NavBar; 