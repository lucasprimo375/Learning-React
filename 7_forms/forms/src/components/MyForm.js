import "./MyForm.css"
import {useState} from "react"

const MyForm = ({user}) => {
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [bio, setBio] = useState("");

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending the form")
    console.log(name, email, bio);

    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Type your name" onChange={handleName} value={name}/>
            </div>
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Type your e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
              <span>Biography:</span>
              <textarea name="bio" placeholder="User description" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default MyForm