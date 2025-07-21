// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Detail from './components/Details';
import App from './App';

import About from './components/About';
import Location from './components/Location';
import AboutComponents from './components/AboutComponents';
import News from './components/News';
function MainApp() {
  return (
    <Router>
      <div className="bg-[#1d4e1a]">
        <Header />
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
        </Routes>
      </div>

      <div className="bg-[#1d4e1a]">
        <Footer />
      </div>
    </Router>
  );
}

export default MainApp;
