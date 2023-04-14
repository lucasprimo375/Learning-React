import './App.css';
import AnotherComponent from './components/AnotherComponent';
import Events from './components/Events';
import MyComponent from './components/MyComponent';
import MyTemplateExpression from './components/MyTemplateExpression';
import Sum from './components/Sum';

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>

      <MyComponent></MyComponent>

      <MyTemplateExpression></MyTemplateExpression>

      <AnotherComponent></AnotherComponent>

      <Events></Events>

      <Sum></Sum>
    </div>
  );
}

export default App;
