import { useEffect } from "react";

const Image = () => {

    useEffect(() => {
        return () => {
            console.log('Image1 se desmonta')
        }
    }, []);

    const urlImage = 'https://images.unsplash.com/photo-1673263229942-1d26f16ecd1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    return (
      <img src={urlImage} alt="Imagen no cargo" />
    )
}
export default Image;
