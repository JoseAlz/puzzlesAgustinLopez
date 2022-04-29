import { Grid, Container, Button } from "@mui/material"
import "./styles/Instrucciones.scss"

const Instrucciones = () => {
    return (
        <Container>
            <Grid>
            <h1> Preguntas Frecuentes</h1>
            </Grid>
            <ul className="boxInstrucciones">
                <li>
                    ¿Como comprar?
                    <p>Una vez que hayas completado el formulario de compra, y generado la orden de compra de tu carrito, nos contactaremos con ud.para informarle el plazo de envío de sus productos. </p>
                </li>
                <li>
                    Formas de Pago 
                    <p>Podes abonar tu compra en efectivo, transferencia bancaria o con tarjetas de credito y/o debito </p>
                </li>
                <li>
                    Cancelación de pedido
                    <p>Podes cancelar tu orden de compra generada cuando nos contactemos con ud. para informarle del envio</p>
                </li>
            </ul>

            <Grid>    
            
            </Grid>
            



        </Container>




    )
}
export default Instrucciones