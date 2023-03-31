import "./MyForm.css"
import {useState} from "react"

const MyForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending the form")
    console.log(name, email);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Type your name" onChange={handleName}/>
            </div>
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Type your e-mail" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default MyForm