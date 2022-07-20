import './App.css';
import Fighter from './components/Fighter';

function App() {
const fighters = ['Roy','Ganondorf', 'Mario', 'Luigi', 'Marth', 'Link',
 'Inkling', 'Samus', 'Fox', 'Sheik', 'Zelda', 'Ken']

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighters.map((Element, index) =>{
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
