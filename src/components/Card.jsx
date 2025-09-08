import { Link } from 'react-router-dom';
import React from 'react';

const MenuItemCard = ({ to, image, name, price }) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center group"
    >
      <div
        className="w-80 h-80 rounded-3xl shadow-lg mb-4 bg-[#1d4e1a] border-2 border-[#1d4e1a] overflow-hidden transition-all duration-300 group-hover:border-green-800"
      >
        <img
          src={image}
          alt={name}
          className="object-cover rounded-3xl w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-center w-80">
        <p className="text-[#1d4e1a] font-medium text-2xl">{name}</p>
        <p className="text-green-800 font-bold text-xl mt-2">{price}đ</p>
      </div>
    </Link>
  );
};

export default MenuItemCard;