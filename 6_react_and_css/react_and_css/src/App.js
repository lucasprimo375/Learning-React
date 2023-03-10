import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const n = 15;
  const name = "Lucas"

  return (
    <div className="App">
      <h1>React with CSS</h1>

      <MyComponent></MyComponent>

      <p>This text is from App.js</p>

      <p style={{color: "pink", padding: "25px", borderTop: "2px solid red"}}>Element stylized inline</p>

      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "indigo"})}>Dynamic CSS</h2>

      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "indigo"})}>Another dynamic CSS</h2>

      <h2 style={name === "Lucas" ? ({color: "magenta"}) : null}>One more dynamic CSS</h2>
    </div>
  );
}

export default App;
