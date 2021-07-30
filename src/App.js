import logo from './logo.svg';
import './App.css';
import Rotas from './dota/Rotas/Rotas'

function App() {
  return (
    <div className="App">

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        color:'white'
      }}>
          <Rotas  />
      </div>

    </div>
  );
}

export default App;
