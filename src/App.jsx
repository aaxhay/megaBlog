import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { legacy_createStore } from '@reduxjs/toolkit'
import conf from './conf/conf'

function App() {
  const [count, setCount] = useState(0)
  console.log(conf.appwriteProjectID);
  
  return (
    <>
      <h1>A Blog With Appwrite</h1>
    </>
  )
}

export default App
