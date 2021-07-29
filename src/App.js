import logo from './logo.svg';
import './App.css';
import Profile from './dota/Player/Profile'

function App() {
  return (
    <div className="App">

      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
          <Profile  />
      </div>

    </div>
  );
}

export default App;
