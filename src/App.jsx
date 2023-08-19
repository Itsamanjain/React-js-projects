import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import ToDoItem from './components/ToDoItem'
import Button from './components/Button'

import './components/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='todo-container'>
      
      <Header />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem /> 
      <Button />
    </div>
  )
}

export default App
