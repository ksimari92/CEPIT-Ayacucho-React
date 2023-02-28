import React, { useState } from 'react'


const CambiarImagen = () => {
    const [imagen, setImagen] = useState("")

    const ANIMAL_IMAGES = {
        img1: "http://via.placeholder.com/111x111",
        img2: "http://via.placeholder.com/222x222",
        img3: "http://via.placeholder.com/333x333",
      };

    const clickImg1 = () => {
        setImagen(ANIMAL_IMAGES.img1)
    }

    const clickImg2 = () => {
        setImagen(ANIMAL_IMAGES.img2)
    }

    const clickImg3 = () => {
        setImagen(ANIMAL_IMAGES.img3)
    }

      
  return (
    <div>
        <h2>Cambiar imagen</h2>
        <button onClick={clickImg1}>Img 1</button>
        <button  onClick={clickImg2}>Img 2</button>
        <button  onClick={clickImg3}>Img 3</button>

        <img src={imagen} alt="imagen" />
    </div>
  )
}

export default CambiarImagen