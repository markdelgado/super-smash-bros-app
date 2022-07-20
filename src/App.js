import './App.css';
import Fighter from './components/Fighter';

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
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighter.map((Element, index) =>{
            return (
              <Fighter fighter= {Element}/>
            )
          })
        }

      </div>
     
    </div>
  );
}

export default App;
