import Logo from "../NavBar/Img/logo.png";
import {FaInstagram } from "react-icons/fa"
import Button from '@mui/material/Button';
import "../NavBar/styleNavBar.css";
import CartWidget from "../CartWidget/CartWidget";

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
                        <CartWidget/>
                    </div>


                </nav>

            </header>
        </div>


    )
}
export default NavBar; 