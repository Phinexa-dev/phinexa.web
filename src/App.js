import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Approach from './routes/Approach';
import Solution from './routes/Solutions';
import Industries from './routes/Industries';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/our-approach" element={<Approach/>}/>
        <Route path="/solutions" element={<Solution/>}/>
        <Route path="/industries" element={<Industries/>}/>
      </Routes>
    </div>
  );
}

export default App;
