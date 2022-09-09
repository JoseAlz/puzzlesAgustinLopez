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
            <Container container className="boxFooter" >
                <Grid className="logoFooter">
                    <img src={Logo} />
                    <div>
                        <a href="https://www.google.com/maps/place/Fructuoso+Rivera+260,+C%C3%B3rdoba/data=!4m2!3m1!1s0x9432a288818819ed:0xdb9e15d3d745c75a?sa=X&ved=2ahUKEwj2kv6C5cb3AhVAmZUCHT0PCDkQ8gF6BAgSEAE" target="_blank">¿Donde encontrarnos? <br />
                            Fructuoso Rivera N°260 - Córdoba</a>

                    </div>
                </Grid>

                <Grid className="navFooter">
                    <ul>
                        <Link className="navItem" to={"/"}><li> Inicio </li></Link>
                        <Link className="navItem" to={"/faq"}><li> Preguntas Frecuentes </li></Link>
                        <Link className="navItem" to={"/contacto"}><li> Contacto</li></Link>
                    </ul>
                </Grid>
                <Grid className="iconos">

                    <a href="https://instagram.com" target="_blank" ><InstagramIcon /> </a>
                    <a href="https://facebook.com" target="_blank" ><FacebookIcon /></a>
                    <a href="https://wa.me/5493512405823" target="_blank"><WhatsAppIcon /></a>

                </Grid>



            </Container>
            <Grid className="copyRight">
                <p>Puzzles Bar, 2022 Copyright © Todos los Derechos Reservados ®. <Link to={"/admin"}>Admin</Link></p> 
            </Grid>
        </footer>
    )


}

export default Footer