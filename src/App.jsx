
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Favlist from './Favlist';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';
import SingUp from './SingUp';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [isLoggedIn , seIsLoggedIn ]=useState(false)
  const favorite = useSelector((state) => state);
  const [users, setUsers] = useState(null);
  const API = "http://localhost:3000/users";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/Favlist" element={<Favlist data={favorite.Cart} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/login' element={<LoginPage users={users} seIsLoggedIn={seIsLoggedIn} />} />
          <Route path='/singup' element={<SingUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
