import React, { useContext } from 'react'
import { CountContext } from '../context'

const Buttons = () => {
    const { count, setCount } = useContext(CountContext)
    return (
        <div>
            <button onClick={() => {
                setCount(count - 1)
            }}>
                Decrement
            </button>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Increment
            </button>
        </div>
    )
}

export default Buttons