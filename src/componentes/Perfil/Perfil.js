import React, { useContext } from 'react';
import persona from '../../assets/img/descarga.png';
import UserContext from '../../context/context';


const Perfil = ({nombre}) => {
    console.log(nombre)
    let usuarios = useContext(UserContext);

    console.log( usuarios)

    return (
        <div>
            <img src={persona} alt="Persona" />
            <p>Hola soy {nombre}!</p>
        </div>
    );
}

export default Perfil;