import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" />
        <select name="" id="">
          <option value="">Typescript</option>
          <option value="">js</option>
          <option value="">bootstrap</option>
        </select>
        <input type="radio" name="" id="" />
      </header>
    </div>
  )
}

export default App
