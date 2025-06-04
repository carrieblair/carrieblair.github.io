import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from './vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
//import Calendar from "./pages/pip/MonthlyView";
// etc.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        
        
        { /*
        <Route path="/calendar" element={<Calendar />} />
        Other pages */}
      </Routes>
    </BrowserRouter>
    
  );
}


export default App
