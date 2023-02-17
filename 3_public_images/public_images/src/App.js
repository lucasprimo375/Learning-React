import './App.css';
import Payakan from "./assets/payakan.jpg"

function App() {
  return (
    <div className="App">
      <h1>Avatar: The Way of Water</h1>

      <div>
        <img src="/avatar.jpg" alt="Avatar: The Way of Water poster" />
      </div>

      <div>
        <img src={Payakan} alt="Payakan" />
      </div>
    </div>
  );
}

export default App;
