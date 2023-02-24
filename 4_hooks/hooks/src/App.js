import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';
import ListRenderer from './components/ListRenderer';
import ConditionalRenderer from './components/ConditionalRenderer';

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

        <div>
          <ManageData></ManageData>
        </div>

        <div>
          <ListRenderer></ListRenderer>
        </div>

        <div>
          <ConditionalRenderer></ConditionalRenderer>
        </div>
      </header>
    </div>
  );
}

export default App;
