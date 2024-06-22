import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './routes/Home';
import WhatWeDoPage from './routes/WhatWeDoPage'
import WhatWeDo from './routes/WhatWeDo';
import Welcome from './components/welcome/Welcome'
import Careers from './components/Careers/Careers'
import Approach from './routes/Approach';
import Solution from './routes/Solutions';
import Industries from './routes/Industries';
import ContactUs from './routes/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Welcome/>}/>
        <Route path="/what-we-do" element={<WhatWeDo/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/our-approach" element={<Approach/>}/>
        <Route path="/solutions" element={<Solution/>}/>
        <Route path="/industries" element={<Industries/>}/>
           <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
         <Footer/>
    </div>
  );
}

export default App;
