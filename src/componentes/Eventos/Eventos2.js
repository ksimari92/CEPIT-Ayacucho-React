import React, { useState } from 'react'

const Eventos2 = () => {
const [cotizacion, setCotizacion] = useState(0);


const convertir = (e) => {
    console.log(e);
    let monto = e.target.value;

    let cotizar = monto / 300;

    setCotizacion(cotizar)
}

  return (
    <div>
        <input onChange={convertir} type="text" placeholder='Ingrese monto' />
        <h2>{cotizacion}</h2>
    </div>
  )
}

export default Eventos2