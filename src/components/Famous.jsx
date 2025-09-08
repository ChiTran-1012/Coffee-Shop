import React, { useEffect, useState } from 'react';
import { menuItems } from './Data'; // Sửa lại import
import Card from './Card';
import { Link } from 'react-router-dom';

const Famous = () => {
  const [famousItems, setFamousItems] = useState([]);

  useEffect(() => {
    // Lọc ra các món nổi tiếng
    const famous = menuItems.filter(item => item.famous);
    setFamousItems(famous);
  }, []);

  return (
    <div className='border-t border-[#1d4e1a]'>
      {famousItems.length > 0 && (
        <div className='bg-[#f7e3a8] py-20'>
          <div className='text-center'>
            <p className='text-[#1d4e1a] font-bold text-6xl'>
              Our Famous<br /><span>Drinks</span>
            </p>
          </div>

          <div className='flex justify-center items-center gap-32 py-20 flex-wrap'>
            {famousItems.map((item) => (
              <Card
                key={item.id}
                to={`/product/${item.id}`}
                image={item.image} // Sử dụng link trực tiếp từ data
                name={item.name}
                price={item.price}
              />
            ))}
          </div>

          <div className='flex items-center justify-center'>
            <p className='rounded-4xl bg-[#1d4e1a] p-3 text-[#f7e3a8] cursor-pointer hover:bg-[#2c6e2a] transition'>
              <Link to="/product">Explore Menu</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Famous;