import React, { useState } from 'react'

const SuperficieRectangulo = () => {
    const [rectangulo, setRectangulo] = useState({
        base: null,
        altura: null
    });

    const [resultado, setResultado] = useState(null);

    const handleChangeInputBase = (e) => {
        setRectangulo({
            ...rectangulo,
            base: e.target.value
        })
    }

    const handleChangeInputAltura = (e) => {
        setRectangulo({
            ...rectangulo,
            altura: e.target.value
        })
    }

    const calcularSuperficie = () => {
        let superficie = rectangulo.base * rectangulo.altura
        setResultado(superficie)
    }


  return (
    <div>
        <h1>Calcular superficie del Rectangulo</h1>

        <input type="text" placeholder='base del rectangulo' onChange={handleChangeInputBase}/>
        <input type="text" placeholder='altura del rectangulo' onChange={handleChangeInputAltura} />

        <button onClick={calcularSuperficie}>Calcular</button>

        <h4>La superficie del rectangulo es: {resultado}</h4>

    </div>
  )
}

export default SuperficieRectangulo