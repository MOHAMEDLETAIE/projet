import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import List from './List';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import Home from './Home';

function App() {
  return (
    
    <div>
      
     <Routes>
      <Route path='/' element={<FirstPage/>} />
      <Route path='/home' element={<Home/>} />
     </Routes>
      
    </div>
  );
}





export default App;



