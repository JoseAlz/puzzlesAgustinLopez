import { useState, } from "react"
import { Grid, Container, Button, Modal } from "@mui/material"
import "./styles/ContactStyle.scss"
import {useNavigate} from "react-router-dom"

const Contacto = () => {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()

    const addContacto = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }
    const volverHome = () => {
        navigate("/")
    }
    return (
        <>
            <Container>
                <Grid>
                    <h1> Contacto</h1>
                </Grid>
                <Grid>
                    <form className="form" onSubmit={addContacto}>
                        <label>Nombre completo</label>
                        <input type="text" required placeholder="Ingresa tu nombre" />
                        <label>Correo Electronico</label>
                        <input type="email" required placeholder="Ingresa tu correo electronico" />
                        <label>Ingresa tu numero de contacto</label>
                        <input type="number" control="none" required placeholder="Ingresa tu numero de contacto" />
                        <label>Ingresa el motivo de su consulta</label>
                        <textarea placeholder="..."/>
                        <Button type="submit" className="btnContacto" >Enviar</Button>
                    </form>
                </Grid>




            </Container>
            <Modal onClose={() => setOpenModal(false)} open={openModal}>
                <div className="envioForm">
                    <h4>Muchas gracias por contactarnos, nos comunicaremos con usted a la brevedad.</h4>
                    <Button className="btnVolver" onClick={volverHome}>Volver</Button>
                </div>



            </Modal>

        </>

    )
}
export default Contacto