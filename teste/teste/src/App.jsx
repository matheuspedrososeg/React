import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let count = 0;

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>This is my first react program.</p>
      <button onClick={increaseCount}>Click me</button>
      <p>Counter: {count}</p>
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
  )
}

export default App
