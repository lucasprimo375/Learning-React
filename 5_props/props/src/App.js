import logo from './logo.svg';
import './App.css';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ShowUserName name="Lucas"></ShowUserName>

      <CarDetails brand="Fiat" km={1000}color="blue"></CarDetails>
    </div>
  );
}

export default App;
