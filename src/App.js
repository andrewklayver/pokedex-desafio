import React from 'react';
import "./App.css";
import PokeList from './components/PokeList';

const App = () => {
 // const message = "Hello World!";
  
  return (
    <>
        <div className='container'>
        <PokeList />
        </div>;
        
     </>
  );
};
 
export default App;