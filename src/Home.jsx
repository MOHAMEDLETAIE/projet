import React, { useState } from 'react'
import Navbar from './Navbar'
import List from './List'

const Home = () => {
    const [ktiba, setktiba] = useState("")

  return (
    <div>
       <Navbar setktiba={setktiba} />
       <center><font color="red"><h1 id='MOVIES'>MOVIES</h1></font></center>
      <div className='parent'>
      <List ktiba={ktiba} />
      </div>
    </div>
  )
}

export default Home
