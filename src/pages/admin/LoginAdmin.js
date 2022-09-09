import { useState, } from "react"
import { auth } from "../../firebase"
import { Button } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import "./styles/LoginAdmin.scss"


const LoginAdmin = (admin) => {

    const [user, setUser] = useState(null)


    const navigate = useNavigate()


    const HandleLogin = async (e) => {
        e.preventDefault()
        const correo = e.target.correoLogin.value;
        const contraseña = e.target.contraseñaLogin.value;
        await signInWithEmailAndPassword(auth, correo, contraseña)
            .then((userCredential) => {
                // Signed in
                const usario = userCredential.user;
                setUser(user)
                navigate("/panel-admin")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log("error mesage", errorMessage)
                if (errorCode == "auth/user-not-found"){
                    alert("Usuario no registrado")
                } else {
                   alert("Contraseña incorrecta")
                }
            })
       

    }
    


    return (

        <>
            <div>
                <h1> Ingreso Administrador</h1>
                <form onSubmit={HandleLogin}>
                    <label >Ingrese su usuario</label>
                    <input type="email" id="correoLogin" placeholder="Correo electronico" />
                    <label>Ingrese contraseña</label>
                    <input type="password" id="contraseñaLogin" placeholder="Contraseña" />
                    <Button type="submit" variant="contained" className="btnIngresar">Ingresar</Button>
                </form>

            </div>


        </>

    )


}



export default LoginAdmin