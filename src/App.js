import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './routes/Home';
import WhatWeDoPage from './routes/WhatWeDoPage'
import Welcome from './components/welcome/Welcome'
import Careers from './components/Careers/Careers'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/w" element={<Welcome/>}/>
        <Route path="/whatwedo" element={<WhatWeDoPage/>}/>
        <Route path="/careers" element={<Careers/>}/>

      </Routes>
         <Footer/>
    </div>
  );
}

export default App;
