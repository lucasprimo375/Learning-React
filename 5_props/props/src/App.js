import logo from './logo.svg';
import './App.css';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import {useState} from "react"
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function showMessage() {
  console.log("This is the message")
}

function App() {
  const cars  = [
    {
      id: 1,
      brand: "Ferrari",
      km: 100,
      color: "black",
      newCar: true
    },
    {
      id: 2,
      brand: "Kia",
      km: 1000,
      color: "black",
      newCar: false
    },
    {
      id: 3,
      brand: "Camaro",
      km: 0,
      color: "yellow",
      newCar: true
    }
  ]

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

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

      <CarDetails brand="Fiat" km={1000} color="blue" newCar={true}></CarDetails>
      <CarDetails brand="Toyota" color="red" km={0} newCar={false}></CarDetails>

      {
        cars.map((car) => (
          <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} key={car.id}></CarDetails>
        ))
      }

      <Fragments propFragment="Yet another title"></Fragments>

      <Container someValue="something">
        <p>This is the container content</p>
      </Container>

      <ExecuteFunction myFunction={showMessage}></ExecuteFunction>

      <Message msg={message}></Message>

      <ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>
    </div>
  );
}

export default App;
