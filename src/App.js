import './App.css';
import { useState } from 'react';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';

function App() {
  const fighter = [
    {name: 'Roy', color: 'blue'},
    { name: 'Lucina', color: 'brown' },
    { name: 'Mario', color: 'lightskyblue' },
    { name: 'Luigi', color: 'pink' },
    { name: 'Marth', color: 'dodgerblue' },
    { name: 'Link', color: 'gray' },
    { name: 'Inkling', color: 'orange' },
    { name: 'Samus', color: 'gold' },
    { name: 'Fox', color: 'mediumseagreen' },
    { name: 'Sheik', color: 'coral' },
    { name: 'Zelda', color: 'midnightblue' },
    { name: 'Ken', color: 'firebrick' },
  ]

  const [selectedFighter, setSelectedFighter] = useState()
 
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighter.map((element, index) =>{
            return (
              <Fighter fighter= {element} setSelectedFighter= {setSelectedFighter}/>
            )
          })
        }
  
      </div>
      
      { selectedFighter ? <FighterScreen/> : null}
     </div>
  );
}

export default App;
