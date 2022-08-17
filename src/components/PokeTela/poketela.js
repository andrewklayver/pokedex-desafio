import React, { useEffect, useState} from 'react';

import './PokeTela.css';

const PokeTela = () => {
   // const {name} = pokemonStatus;
   const [pokemonStatus, setPokemonStatus] = useState();
 //  const [getPokemon, setPokemon]= useState([])
   
     
   useEffect(() => {
    const getPokemon = async()  => {

      await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then(response => response.json())
      .then(data => {
      setPokemonStatus(data)
                })
     }
    getPokemon()
    
  },[]);

console.log(pokemonStatus)
    return(
         <div className='poke-tela'>
          <span>{} </span>

         
        
                
            
         </div>
    )
}

export default PokeTela;