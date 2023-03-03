import { useState } from 'react'

function ConditionalRenderer() {
    const condition = useState(true)

    const [name, setName] = useState("Lucas")

    return (
        <div>
            {condition && <h1>PRINTING</h1> }

            {name === "Lucas" ? (
                <div>
                    <p>The name is Lucas</p>
                </div>
            ) : (
                <div>
                    <p>Name not found</p>
                </div>
            )}

            <button onClick={() => setName("Robert")}>Change name!</button>
        </div>
    )
}

export default ConditionalRenderer