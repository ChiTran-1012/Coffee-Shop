// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Detail from './components/Details';
import App from './App';

import About from './components/About';

function MainApp() {
  return (
    <Router>
      <div className="bg-[#1d4e1a]">
        <Header />
      </div>

      <div className="bg-[#FFECB8] min-h-screen">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
           <Route path="/product/:id" element={<Detail />} />
        </Routes>
      </div>

      <div className="bg-[#1d4e1a]">
        <Footer />
      </div>
    </Router>
  );
}

export default MainApp;
