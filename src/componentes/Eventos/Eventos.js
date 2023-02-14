import React, { useState } from 'react'

const Eventos = () => {
    const [nombre, setNombre] = useState();

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