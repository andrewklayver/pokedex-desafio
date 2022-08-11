import React from "react"; 
import './PokeLista.css';
import Pokemon from "../Pokemon/pokemon";

const PokeLista = (props) => {
   const {pokemons, loading} = props;
     return (
     <>
        <div className="poke-lista">
           
        </div>
        <div>
        {pokemons && pokemons.map((pokemon, index) => {
            return (
               <Pokemon key={index} pokemon={pokemon}/>
               
            )
           })}
       </div>
     </>        
     );
}


        
 
export default PokeLista ;
