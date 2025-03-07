import { useState } from 'react'
import './App.css'
import Login from './assets/Login'
import { users } from './assets/Login'

function App() {
  console.log(users);

  return (
   <div>
    <Login/>
   </div>
  )
}

export default App
