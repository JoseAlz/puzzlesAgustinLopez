import { useState, useRef } from "react"
import { Grid, Container, Button, Modal } from "@mui/material"
import "./styles/ContactStyle.scss"
import { useNavigate } from "react-router-dom"
import emailjs from '@emailjs/browser';
const Contacto = () => {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()
    const form = useRef();


    const addContacto = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_0hrnkcd', 'template_olvo8vm', form.current, 'yqDBror8_hTAX0mCP')
            .then((result) => {
                console.log(result.text);
                setOpenModal(true)
            }, (error) => {
                console.log(error.text);
            });
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
                <form name="contact"  className="form" ref={form} onSubmit={addContacto}  >
                        <input type="hidden" name="form-name" value="contact" />
                        <label>Nombre completo</label>
                        <input type="text" required placeholder="Ingresa tu nombre" id="nombre" name="nombre" />
                        <label>Correo Electronico</label>
                        <input type="email" required placeholder="Ingresa tu correo electronico" id="email" name="email" />
                        <label>Ingresa tu numero de contacto</label>
                        <input type="number" control='none' id="telefono" name="telefono"required placeholder="Ingresa tu numero de contacto" />

                        <label>Ingresa el motivo de su consulta</label>
                        <textarea required placeholder="..."id="mensaje" name="mensaje" />
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