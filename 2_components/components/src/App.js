import './App.css';
import AnotherComponent from './components/AnotherComponent';
import MyComponent from './components/MyComponent';
import MyTemplateExpression from './components/MyTemplateExpression';

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>

      <MyComponent></MyComponent>

      <MyTemplateExpression></MyTemplateExpression>

      <AnotherComponent></AnotherComponent>
    </div>
  );
}

export default App;
