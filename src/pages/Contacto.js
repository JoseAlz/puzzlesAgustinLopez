import { Grid, Container, Button } from "@mui/material"
import "./styles/ContactStyle.css"

const Contacto = () => {
    return (
        <Container>
            <Grid>
            <h1> Contacto</h1>
            </Grid>
            <Grid><form className="form">
                <label>Nombre completo</label>
                <input type="text" required placeholder="Ingresa tu nombre"/>
                <label>Correo Electronico</label>
                <input type="email" required placeholder="Ingresa tu correo electronico"/>
                <label>Ingresa tu numero de contacto</label>
                <input type="number" required placeholder="Ingresa tu numero de contacto"/>
                <Button className="btnContacto">Enviar</Button>    
            </form>
            </Grid>
            



        </Container>




    )
}
export default Contacto