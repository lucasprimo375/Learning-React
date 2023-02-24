import {useState} from 'react'

const ListRenderer = () => {
  const [list] = useState(["Robert", "Alan", "Kim"])
  
  return (
    <div>
        <ul>
            {
                list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ListRenderer