import Logo from "../NavBar/Img/logo.png";
import {FaInstagram } from "react-icons/fa"
import Button from '@mui/material/Button';
import "../NavBar/styleNavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"


function NavBar() {
    return (

        <div className="headerBox">
            <header>
                <nav>
                   <Link to={"./"}> <img src={Logo} className="logoNav" /></Link>
                        <div className="btnNav">
                        <Link to={"./"}><Button className="btn" variant="outlined">Productos</Button></Link>
                        <Link to={"./alcoholica"}><Button className="btn" variant="outlined">Bebidas Alcoholicas</Button></Link>
                        <Link to={"./comunes"}><Button className="btn" variant="outlined">Bebidas </Button></Link>
                        <Link to={"./contacto"} ><Button className="btn" variant="outlined">Contacto</Button></Link>
                        

                        </div>
                   
                    <div className="iconosNav">
                        
                        <CartWidget/>
                        <Button > <FaInstagram className="iconoIG" /> </Button>
                    </div>


                </nav>

            </header>
        </div>


    )
}
export default NavBar; 