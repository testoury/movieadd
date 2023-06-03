import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Favlist from './Favlist';
import Contact from './Contact';
import { useSelector } from 'react-redux';

const App = () => {
  const favorite = useSelector((state) => state);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favlist" element={<Favlist data={favorite.Cart} />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
