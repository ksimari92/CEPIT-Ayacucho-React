import React, { useContext } from 'react'
import PokeContext from '../../context/PokeContext'

const MostrarPokemons = () => {
    const pokemons = useContext(PokeContext);

    console.log(pokemons)

    return (
        <div>
            {
                pokemons.map(pokemon => {
                   return <div> 
                        <img src={pokemon.avatar} alt="Pokemon" />
                        <h3>{pokemon.first_name}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default MostrarPokemons