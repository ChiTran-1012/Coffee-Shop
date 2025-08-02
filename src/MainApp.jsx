// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Detail from './components/Details';
import App from './App';
import Login from './components/Login';
import About from './components/About';
import Location from './components/Location';
import AboutComponents from './components/AboutComponents';
import News from './components/News';
import AddUser from './components/AddUser';
import React, { useState, useEffect } from 'react';
import AddItem from './components/AddItem';

function MainApp() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    
    <Router>
      <div className="bg-[#1d4e1a]">
        <Header user={user} setUser={setUser} />
      </div>

      <div className="bg-[#FFECB8] min-h-screen">
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<AboutComponents />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-item" element={<AddItem />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>

      <div className="bg-[#1d4e1a]">
        <Footer />
      </div>
    </Router>
  );
}

export default MainApp;
