import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>React with CSS</h1>

      <MyComponent></MyComponent>

      <p>This text is from App.js</p>

      <p style={{color: "pink", padding: "25px", borderTop: "2px solid red"}}>Element stylized inline</p>
    </div>
  );
}

export default App;
