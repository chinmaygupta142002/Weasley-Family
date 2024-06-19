import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css'; 

function App() {
  return (
    <div data-theme="synthwave">
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Home /> />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App