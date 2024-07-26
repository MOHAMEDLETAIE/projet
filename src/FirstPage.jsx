import React from 'react'
import logo from "./netflix.png"
import { useNavigate } from 'react-router-dom'
const FirstPage = () => {
  const navigate=useNavigate()
  return (
    <div className='Ap  p'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <button onClick={()=>navigate("/home")} >WELCOME</button>
      </header>
    </div>
  )
}

export default FirstPage
