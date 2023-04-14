const Container = ({children, someValue}) => {
  return (
    <div>
        <h1>This the container title</h1>
        {children}
        <p>The value is {someValue}</p>
    </div>
  )
}

export default Container