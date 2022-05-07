import Container from "@mui/material/Container"
import "../Portada/Portada.scss"
const Portada = () => {
    return (
        <Container className="portada">
            <h1>Puzzles Bar</h1>
            <p>
                Nos dedicamos a la Comercialización y Distribución de bebidas hace más de 10 años. <br/>
                Gracias a nuestra trayectoria y experiencia en el rubro contamos con la más amplia variedad de productos, marcas, en distintas presentaciones y tamaños.<br/>
                Ofrecemos calidad de servicio, aseguramos las condiciones pautadas en materia de entrega y distribución. También contamos con un servicio take away, en el que el cliente puede acercarse personalmente a retirar su pedido por nuestra distribuidora.<br/>
                Contamos con una amplia variedad de productos nacionales e importados de consumo masivo.
            </p>
        </Container>
    )

}
export default Portada