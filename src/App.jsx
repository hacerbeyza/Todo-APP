import { useState } from 'react'
import './App.css'
import Todo from './components/todo'
import './index.css'

function App() {

  return (
    <>
    <div className='bg-[#006A71] h-screen grid'>
      <Todo/>
    </div>
    </>
  )
}

export default App
