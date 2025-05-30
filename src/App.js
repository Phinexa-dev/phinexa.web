import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './routes/Home';
import WhatWeDoPage from './routes/WhatWeDoPage'
import WhatWeDo from './routes/WhatWeDo';
import Welcome from './components/welcome/Welcome'
// import Careers from './components/Careers/Careers'
import Approach from './routes/Approach';
import Solution from './routes/Solutions';
import Industries from './routes/Industries';
import ContactUs from './routes/ContactUs';
import About from './routes/About';
import Contact from './routes/Contact';
import Carreers from './routes/Carreers';
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="App">
      <Toaster richColors  />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/about" element={<Welcome/>}/> */}
        <Route path="/about" element={<About/>}/>
        <Route path="/what-we-do" element={<WhatWeDo/>}/>
        {/* <Route path="/careers" element={<Careers/>}/> */}
        <Route path="/careers" element={<Carreers/>}/>
        <Route path="/our-approach" element={<Approach/>}/>
        <Route path="/solutions" element={<Solution/>}/>
        <Route path="/industries" element={<Industries/>}/>
        {/* <Route path="/contact" element={<ContactUs/>}/> */}
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
