// import Galeria from "./componentes/Galeria/Galeria";
// import Header from "./componentes/Header/Header";
import Eventos2 from "./componentes/Eventos/Eventos2";
import CambiarImagen from "./componentes/useState/CambiarImagen";
import ConversorGrados from "./componentes/useState/ConversorGrados";
import SuperficieRectangulo from "./componentes/useState/SuperficieRectangulo";
import Contador from "./componentes/useEffect/Contador";
import Galeria from "./componentes/Galeria/Galeria";
import UserContext from "./context/context";
import Eventos from "./componentes/Eventos/Eventos";
import PokeContext from './context/PokeContext'
import MostrarPokemons from "./componentes/Pokemon/MostrarPokemons";
import { useEffect, useState } from "react";


function App() {
  // const info ={
  //   nombres: [{ name: "Juan" }, { name: "Pedro" }, { name: "Pablo" }, { name: "Gonzalo" }, { name: "Horacio" }, { name: "German" }],
  //   mascotas: ['Perro', 'Gato'],
  //   vehiculos: ['Auto', 'Moto']
  // }
const [pokemons, setPokemons] = useState([]);

const getPokemons = () => {
  fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(data => setPokemons(data.data))
}

useEffect(() => {
  getPokemons();
}, [])


  return (
    <div>
      {/* <Header/>
      <Galeria nombres={nombres} /> */}
      {/* <Eventos2/> */}
      {/* <UserContext.Provider value={info}>
        <Galeria />
        <Eventos/>

      </UserContext.Provider> */}

      <PokeContext.Provider value={pokemons} >
        <MostrarPokemons />
      </PokeContext.Provider>

    </div>
  );
}

export default App;

