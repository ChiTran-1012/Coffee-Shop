// src/components/CoffeeMenu.jsx
import React from 'react';
import Card from './Card'; // Assuming you have a Card component for displaying coffee items
import {categories, menuItems} from './Data'; // Importing the coffee items data


const CoffeeMenu = () => {
  return (
    <div className="min-h-screen bg-[#fdf6e3] px-40 py-12">
      {categories.filter(category => category.id == '1').map((category) => (
        <div key={category.id} className="mb-12 flex items-center gap-4 justify-center py-24">
          <img src={category.image} alt="" className='w-[75px] rounded-full bg-[#1d4e1a]' />
          <h2 className="text-7xl font-bold text-[#1d4e1a]">{category.name}</h2>
        </div>
      ))}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuItems.filter(item => item.categoryId == '1').map((item) => (
          <Card
            key={item.id} // Assuming each item has a unique id
             to={`/product/${item.id}`}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
     {categories.filter(category => category.id == '2').map((category) => (
       <div key={category.id} className="mb-12 flex items-center gap-4 justify-center py-24">
          <img src={category.image} alt="" className='w-[75px] rounded-full bg-[#1d4e1a]' />
          <h2 className="text-7xl font-bold text-[#1d4e1a]">{category.name}</h2>
        </div>
      ))}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuItems.filter(item => item.categoryId == '2').map((item) => (
          <Card
            key={item.id} // Assuming each item has a unique id
             to={`/product/${item.id}`}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
     {categories.filter(category => category.id == '3').map((category) => (
        <div key={category.id} className="mb-12 flex items-center gap-4 justify-center py-24">
          <img src={category.image} alt="" className='w-[75px] rounded-full bg-[#1d4e1a]' />
          <h2 className="text-7xl font-bold text-[#1d4e1a]">{category.name}</h2>
        </div>
      ))}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuItems.filter(item => item.categoryId == '3').map((item) => (
          <Card
            key={item.id} // Assuming each item has a unique id
             to={`/product/${item.id}`}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CoffeeMenu;
