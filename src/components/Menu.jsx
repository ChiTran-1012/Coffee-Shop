import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { categories } from './Data'; // Sửa lại import

const Menu = () => {
  const [categories1, setCategories] = useState([]);

  useEffect(() => {
      // Lọc ra các món nổi tiếng
      const category = categories.filter(item => item.id);
      setCategories(category);
    }, []);

  return (
    <div className='bg-[#fcf3d9] py-20'>
      {/* Tiêu đề */}
      <div className='text-center'>
        <p className='text-[#1d4e1a] font-bold text-6xl'>
          Find and Get<br /><span>What You Love</span>
        </p>
      </div>

      {/* Danh sách menu */}
      <div className='flex justify-center items-center gap-32 py-20 flex-wrap'>
        {categories1.map((item, index) => (
          <div className='flex flex-col items-center group' key={index}>
            <div className='w-80 h-80 rounded-full shadow-md mb-4 bg-[#1d4e1a] border-4 border-[#1d4e1a] overflow-hidden transition-all duration-300 group-hover:border-green-800'>
              <img
                src={`${item.image}`} // Đảm bảo ảnh đặt trong public/images/
                alt={item.name}
                className='object-cover rounded-full w-full h-full transform transition-transform duration-300 group-hover:scale-110'
              />
            </div>
            <p className='text-[#1d4e1a] font-medium text-2xl'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
