import React from 'react'

const Navbar = ({setktiba}) => {
  return (
    <div className='Navbar'>
      <h1>Netflix</h1>
     
      <input onChange={(e)=>setktiba(e.target.value)} type="text"className='input_search' />
      
      
       
   
       
    </div>
   
  )
}

export default Navbar
