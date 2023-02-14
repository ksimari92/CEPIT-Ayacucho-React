import React from 'react';
import persona from '../../assets/img/descarga.png';


const Perfil = ({nombre}) => {
    console.log(nombre)
    return (
        <div>
            <img src={persona} alt="Persona" />
            <p>Hola soy {nombre}!</p>
        </div>
    );
}

export default Perfil;