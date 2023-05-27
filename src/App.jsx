import React from 'react';
import { BrowserRouter , Route , Routes , Link } from 'react-router-dom';
import Home from './Home';
import Favlist from './Favlist';
import Contact from './Contact';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/Home'  element={<Home/>} />
        <Route path='/Favlist'  element={<Favlist/>} />
        <Route path='/Contact'  element={<Contact/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
