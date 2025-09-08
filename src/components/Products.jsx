import React, { useEffect, useState } from 'react';
import Card from './Card';
import { categories, menuItems } from './Data'; // Sửa lại import

const CoffeeMenu = () => {
  const [categories1, setCategories] = useState([]);
  const [menuItems1, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCategories(categories);
    setMenuItems(menuItems);
    setLoading(false); // Nếu muốn dùng loading
  }, []);

  if (loading) return <div className="p-8">Đang tải dữ liệu...</div>;

  return (
    <div className="min-h-screen bg-[#fcf3d9] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-8 sm:py-12">
      {categories1.map((category) => (
        <div key={category.id}>
          <div className="mb-12 flex flex-col sm:flex-row items-center gap-4 justify-center py-12 sm:py-24">
            <img
              src={`${category.image}`}  // Đảm bảo ảnh là lowercase và nằm trong thư mục public
              alt={category.name}
              className="w-20 sm:w-[75px] rounded-full bg-[#1d4e1a]"
            />
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-[#1d4e1a] text-center sm:text-left">
              {category.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menuItems1
              .filter((item) => item.categoryId == category.id)
              .map((item) => (
                <Card
                  key={item.id}
                  to={`/product/${item.id}`}
                  image={`${item.image}`}  // Ảnh sản phẩm cũng lowercase
                  name={item.name}
                  price={item.price}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeMenu;
