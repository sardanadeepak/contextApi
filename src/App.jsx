import { useState } from 'react'
import { CountContext } from './context'
import CountReader from './components/CountReader'
import Buttons from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Count />
    </CountContext.Provider>
  )
}

export default App

const Count = () => {
  console.log('Count Re-render')
  return <div>
    <CountReader />
    <Buttons />
  </div>
}
