import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#204d20] text-[#f7ecb4] px-10 lg:px-32 py-16">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        {/* Left: Logo + Contact */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#f7ecb4] text-[#204d20] p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                <path d="M6 2a1 1 0 00-1 1v18a1 1 0 001.45.89l11-6a1 1 0 000-1.78l-11-6A1 1 0 006 8V3a1 1 0 00-1-1z" />
              </svg>
            </div>
            <div>
              <p className="font-bold leading-tight">Life Begins</p>
              <p className="font-bold leading-tight">After Coffee</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaPhoneAlt />
            <span>+1 (212) 555–0198</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope />
            <span>hello@bhaus.com</span>
          </div>
        </div>

        {/* Main menu */}
        <div>
          <h4 className="text-sm uppercase mb-4">Main</h4>
          <ul className="space-y-1 font-semibold">
            <li><Link to="/product">Menu</Link></li>
            <li><Link to="/location">Locations</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm uppercase mb-4">Categories</h4>
          <ul className="space-y-1 font-semibold">
            <li><Link to="/product">Coffee</Link></li>
            <li><Link to="/product">Cold Drinks</Link></li>
            <li><Link to="/product">Bakery</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm uppercase mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <Link to="/product" className="bg-[#f7ecb4] text-[#204d20] p-3 rounded-full">
              <FaInstagram />
            </Link>
            <Link to="/product" className="bg-[#f7ecb4] text-[#204d20] p-3 rounded-full">
              <FaFacebookF />
            </Link>
            <Link to="/product" className="bg-[#f7ecb4] text-[#204d20] p-3 rounded-full">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="flex justify-between items-center text-xs border-t border-[#275e27] pt-6">
        <p>2025 © Brewhaus</p>
        <p><a href="#" className="hover:underline">Licenses</a></p>
      </div>
    </footer>
  );
};

export default Footer;
