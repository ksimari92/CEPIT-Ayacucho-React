import React, { useContext } from 'react'
import UserContext from '../../context/context'
import Perfil from '../Perfil/Perfil'
import './Galeria.css'

const Galeria = () => {
    // const {nombres, edades} = props; // desectructuracion de props (se reciben como un objeto)

    let users = useContext(UserContext);


    return (
        <div className='contenedor-cards'>
            {
                users.nombres.map(item => {
                        return <Perfil nombre={item.name} />
                })
            }
        </div>
    )
}

export default Galeria