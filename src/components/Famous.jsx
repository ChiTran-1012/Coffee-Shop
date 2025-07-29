import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Famous = () => {
  const [famousItems, setFamousItems] = useState([]);

  useEffect(() => {
    // Gọi API PHP
    axios.get('http://localhost/menu-api/get-famous.php') // API chỉ lấy famous items
      .then(res => {
        setFamousItems(res.data);
      })
      .catch(err => {
        console.error("Lỗi khi gọi API get-famous.php", err);
      });
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
                image={`/public/${item.image}`} // ảnh từ public/assets
                name={item.name}
                price={item.price}
              />
            ))}
          </div>

          <div className='flex items-center justify-center'>
            <p className='rounded-4xl bg-[#1d4e1a] p-3 text-[#f7e3a8] cursor-pointer hover:bg-[#2c6e2a] transition'>
              Explore Menu
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Famous;
