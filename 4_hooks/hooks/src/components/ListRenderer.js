import {useState} from 'react'

const ListRenderer = () => {
    const [list, setList] = useState([{name: "Robert", id: 1}, 
                            {name: "Alan", id: 2}, 
                            {name: "Kim", id: 3}])
  
    const deleteRandomItem = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        console.log(randomNumber)
        console.log(list)

        setList((prev) => {
            return prev.filter((item) => randomNumber !== item.id)
        })
    }   

  return (
    <div>
        <ul>
            {
                list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>

        <button onClick={deleteRandomItem}>Delete random item</button>
    </div>
  )
}

export default ListRenderer