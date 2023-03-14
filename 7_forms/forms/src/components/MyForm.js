import "./MyForm.css"

const MyForm = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Type your name" />
            </div>
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Type your e-mail" />
            </label>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default MyForm