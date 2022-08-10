import React from 'react';
import "./App.css";
import Button from './components/Button/button';
import PokeTela from './components/PokeTela/poketela';
import PokeLista from './components/PokeLista/pokelista';

const App = () => { 
  return (
    <>
        <div className='container'>
        <PokeTela />
        <Button />
        <PokeLista />
        </div>;
        
     </>
  );
};
 
export default App;