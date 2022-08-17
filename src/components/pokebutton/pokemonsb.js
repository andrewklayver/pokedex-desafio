import React, {useEffect, useState} from "react";
import './PokemonButton.css';

const PokemonButton = () => {
    const [pokemons, setPokemons] = useState(null)
    const [count, setCount] = useState(1)
   
   const getPokemon = count => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`).then(response => 
      response.json().then(data => setPokemons(data))) 

    }
    
    useEffect(() => {
      getPokemon(count)
    }, [count])

    return (
    <>
       
       <div>
       <img className="pokeimg" src={pokemons?.sprites.front_default} alt="" />
        </div >
       <div>
             <button className="buttonback" onClick={() => setCount(count - 1)}>back </button>
          
       </div>
       <div>
             <button className="buttonnext" onClick={() => setCount(count + 1)}>next </button>
       </div>
    </>
      
    );
}

export default PokemonButton;