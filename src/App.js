import React, {useEffect, useState} from 'react';
import "./App.css";
import Button from './components/Button/button';
import PokeTela from './components/PokeTela/poketela';
import PokeLista from './components/PokeLista/pokelista';
import { getPokemons, getPokemonsData } from './api';
import Pokemon from './components/Pokemon/pokemon';



const App = () => { 
 
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async ()  => {
    try {
      setLoading(true)
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)

      })
      setPokemons([]);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  }
  
  useEffect(() => {
       const fetchData = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/ability/?limit=100&offset=0')
       }


  })
    
  useEffect(() => {
    fetchPokemons();
  }, [pokemons])
  return (
    <>
        <div className='container'>
        <PokeTela />
        <Button />
        <PokeLista />
        <Pokemon pokemons={pokemons.results} loading={loading}/>

        </div>;
        
     </>
  );
};
 
export default App;