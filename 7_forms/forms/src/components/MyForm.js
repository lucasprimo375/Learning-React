import "./MyForm.css"
import {useState} from "react"

const MyForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }
  
  console.log(name);
  console.log(email);

  return (
    <div>
        <form>
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