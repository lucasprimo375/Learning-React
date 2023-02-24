import { useState } from 'react'

function ConditionalRenderer() {
    const condition = useState(true)

    return (
        <div>
            {condition && <h1>PRINTING</h1> }
        </div>
    )
}

export default ConditionalRenderer