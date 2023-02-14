import React from 'react'
import Perfil from '../Perfil/Perfil'
import './Galeria.css'

const Galeria = ({nombres}) => {
    // const {nombres, edades} = props; // desectructuracion de props (se reciben como un objeto)

    console.log(nombres)

    return (
        <div className='contenedor-cards'>
            {
                nombres.map(item => {
                        return <Perfil nombre={item.name} />
                })
            }
        </div>
    )
}

export default Galeria