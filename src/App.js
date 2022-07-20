import './App.css';

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
              <div>
                <img src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${Element.toLowerCase()}.png`}  className='fighter-img'/>
              <h5 className='fighter-name'>{Element}</h5>
              </div>
            )
          })
        }

      </div>
     
    </div>
  );
}

export default App;
