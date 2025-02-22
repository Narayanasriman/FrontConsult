import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import MiddlePage from './MiddlePage/MiddlePage';
import Find from './Find/Find';
import Pricing from './Pricing/Pricing';
import Questions from './Questions/Questions';
import Connect from './Connect/Connect';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MiddlePage />
      <Find />
      <Pricing />
      <Questions />
    </div>
  );
};

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
   
  );
};

export default App;
