import { Container } from "@mui/material"
import Logo from "../NavBar/Img/logo.png"
import { Link } from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Grid } from "@mui/material";

/*styles*/
import "../Footer/Footer.scss"

const Footer = () => {
    return (
        <footer>
        <Container  container className="boxFooter" >
            <Grid className="logoFooter">
                <img src={Logo}/>
                <div>
                <p>¿Donde encontrarnos?</p>
                <p>Fructuoso Rivera N°260 - Córdoba</p>
                
                </div>
            </Grid>
            
            <Grid className="navFooter">
                <ul>
                    <li> Inicio </li>
                    <li> Productos </li>
                    <li> Contacto</li>
                </ul>
            </Grid>
            <Grid className="iconos">
                <Link to={"www.facebook.com"}> <FacebookIcon/> </Link>
                <Link to={"www.facebook.com"}> <InstagramIcon/> </Link>
                <Link to={"www.facebook.com"}> <WhatsAppIcon/> </Link>

            </Grid>
           


        </Container>
        <Grid className="copyRight">
                <p>Puzzles Bar, 2022 Copyright © Todos los Derechos Reservados ®.</p>
            </Grid>
        </footer>
    )


}

export default Footer