import React from 'react'
  
const Modal = ({setshow,el}) => {
  return (
    <div className='modal'>
      <div className='box_modal'>
        <button onClick={()=>setshow(false)} >X</button>
        <h1>{el.name}</h1>
        <h2>{el.genre}</h2>
        <h2>{el.link}</h2>
      </div>
    </div>

  )
}

export default Modal