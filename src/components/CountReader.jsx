import React, { useContext } from 'react'
import { CountContext } from '../context'

const CountReader = () => {
    const { count } = useContext(CountContext)
    return (
        <div>
            {count}
        </div>
    )
}

export default CountReader