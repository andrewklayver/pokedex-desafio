import React, { useState} from 'react';
import "./App.css";
import PokemonButton from './components/pokebutton/pokemonsb';
import PokeLista from './components/PokeLista/pokelista';
import PokeTela from './components/PokeTela/poketela';


const App = () => { 
     // eslint-disable-next-line 
  const [pokemonUrl, setPokemonUrl] = useState("");
      
  return (
   
   <div className='main'>
       <div className='container'>
       <PokeTela />
      
       <div className="telaNomes">
      
      <PokeLista setPokemon={setPokemonUrl}  />
    
        </div>
       <PokemonButton />
       

    </div>   
</div>

       
        
    
  );
};
 
export default App;