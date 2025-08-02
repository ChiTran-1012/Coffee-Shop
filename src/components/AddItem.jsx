import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [product, setProduct] = useState({
    name: '',
    categoriesId: '',
    price: '',
    description: '',
    image: '',
    famous: '',
    sizes: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Dữ liệu gửi đi:", product); // 🧪 kiểm tra

    try {
        const res = await axios.post(
        'http://localhost/menu-api/add-item.php',
        product,
        { headers: { 'Content-Type': 'application/json' } } // 🔑 Quan trọng
        );
        console.log("Phản hồi từ PHP:", res.data); // 🧪 kiểm tra
        setMessage(res.data.message);
    } catch (error) {
        console.error("Lỗi khi gửi dữ liệu:", error); // 🧪 kiểm tra
        setMessage("Lỗi khi gửi dữ liệu");
    }
    };



  return (
    <div className='bg-[#FFECB8] flex justify-center'>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Thêm tài khoản</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="text"
            name="name"
            placeholder="Tên item"
            value={product.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />
            <input
            type="text"
            name="categoriesId"
            placeholder="categoriesId"
            value={product.categoriesId}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />
            <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />
            <input
            type="text"
            name="description"
            placeholder="description"
            value={product.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />
            <input
            type="text"
            name="image"
            placeholder="image"
            value={product.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />
            <input
            type="number"
            name="famous"
            placeholder="famous"
            value={product.famous}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />
            <input
            type="text"
            name="sizes"
            placeholder="sizes"
            value={product.sizes}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            />


            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Thêm</button>
        </form>
        {message && <p className="mt-4 text-sm text-center">{message}</p>}
        </div>
    </div>
  );
};

export default AddItem;
