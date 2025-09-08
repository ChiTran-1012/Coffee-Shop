import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { menuItems } from './Data'; // Sửa lại import
import Card from './Card';
import { Link } from 'react-router-dom';
=======
import axios from 'axios';
import Card from './Card';
>>>>>>> bcaa34d2ac2d0691c531a3582e8814d627c887a2

const Famous = () => {
  const [famousItems, setFamousItems] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    // Lọc ra các món nổi tiếng
    const famous = menuItems.filter(item => item.famous);
    setFamousItems(famous);
=======
    // Gọi API PHP
    axios.get('http://localhost/menu-api/get-famous.php') // API chỉ lấy famous items
      .then(res => {
        setFamousItems(res.data);
      })
      .catch(err => {
        console.error("Lỗi khi gọi API get-famous.php", err);
      });
>>>>>>> bcaa34d2ac2d0691c531a3582e8814d627c887a2
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
<<<<<<< HEAD
                image={item.image} // Sử dụng link trực tiếp từ data
=======
                image={`/public/${item.image}`} // ảnh từ public/assets
>>>>>>> bcaa34d2ac2d0691c531a3582e8814d627c887a2
                name={item.name}
                price={item.price}
              />
            ))}
          </div>

          <div className='flex items-center justify-center'>
            <p className='rounded-4xl bg-[#1d4e1a] p-3 text-[#f7e3a8] cursor-pointer hover:bg-[#2c6e2a] transition'>
<<<<<<< HEAD
              <Link to="/product">Explore Menu</Link>
=======
              Explore Menu
>>>>>>> bcaa34d2ac2d0691c531a3582e8814d627c887a2
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Famous;
=======
export default Famous;
>>>>>>> bcaa34d2ac2d0691c531a3582e8814d627c887a2
