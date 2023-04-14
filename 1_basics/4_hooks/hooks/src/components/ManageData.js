import {useState} from "react"

const ManageData = () => {
    const [data, setData] = useState(10)

    const addToData = () => {
        setData(data + 10)
    }

    return (
        <div>
            <h1>Value of data is {data}</h1>

            <button onClick={addToData}>Add 10 to data</button>
        </div>
    )
}

export default ManageData