import React, { useContext, useState } from 'react'
import UserContext from '../../context/context';

const Eventos = () => {
    const [nombre, setNombre] = useState();

    const users = useContext(UserContext)
    console.log(users)

    const handleCambiarNombre = () => {
        if (nombre === "Juan") {
            setNombre("Pedro");
        } else if (nombre === "Pedro") {
            setNombre("Juan")
        }
    }

        return (

            <div>
                <h1>{nombre}</h1>
                <button onClick={handleCambiarNombre}>Cambiar nombre</button>
            </div>
        )
    }

    export default Eventos