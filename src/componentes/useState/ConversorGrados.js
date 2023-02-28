import React, {useState} from 'react'

const ConversorGrados = () => {
    const [resultado, setResultado] = useState(null);

const handleChangeInput = (e) => {
    let gradosCentigrados = e.target.value;

    let gradosFarenheit = (gradosCentigrados * 9/5 ) + 32;

    setResultado(gradosFarenheit)    

    if(gradosCentigrados === "") {
        setResultado(null);
    }
}
  return (
    <div>
        <input type="text" placeholder='Ingrese grados Centigrados' onChange={handleChangeInput}/>
        <h3>Conversion a grados Farenheit: {resultado}</h3>
    </div>
  )
}

export default ConversorGrados