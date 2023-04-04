import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{
        name: "lucas",
        email: "lucas@email.com",
        bio: "I'm a programmer",
        role: "admin"
      }}>
      </MyForm>
    </div>
  );
}

export default App;
