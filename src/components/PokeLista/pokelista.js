import React, {useEffect, useState} from 'react';
import './PokeLista.css';



const PokeLista = ({setPokemon}) => {
   const [poke, setPoke] = useState([]);
   const [page, setPage] = useState(15)
   
      useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${page}`)
        .then(response => response.json())
        .then(data => setPoke(data.results)) 
      
      }, [page]);
     
      
      return (
      <>
          <div className='poke'>
          {poke.map((personagem, id) => ( 
                         
                <button className="buttonlist" key={id} onClick={()=>{setPokemon(personagem.url) }}>{personagem.name}</button> 
              ))}
        
          </div> 
          <div>
            <button className="buttonlistback" onClick={() => setPage(page- 15)}>back </button>
            <button className="buttonlistnext" onClick={() => setPage(page + 15)}>next </button>              
           </div>
      </>
      );
    };
         
export default PokeLista ;
