import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [product, setProduct] = useState({
        name: '',
        categoryId: '1',
        price: '',
        description: '',
        image: '',
        famous: '0',
        sizes: []
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSizesChange = (size) => {
        setProduct((prev) => {
            const updatedSizes = prev.sizes.includes(size)
                ? prev.sizes.filter((s) => s !== size)
                : [...prev.sizes, size];
            return { ...prev, sizes: updatedSizes };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {
            ...product,
            sizes: product.sizes.join(',') // gửi dạng "S,M,L"
        };

        try {
            const res = await axios.post(
                'http://localhost/menu-api/add-item.php',
                dataToSend,
                { headers: { 'Content-Type': 'application/json' } }
            );
            setMessage(res.data.message);
        } catch (error) {
            console.error("Error sending data:", error);
            setMessage("Lỗi khi gửi dữ liệu");
        }
    };

    return (
        <div className="bg-[#FFECB8] flex justify-center min-h-screen py-10">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Thêm Item Mới</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">Tên item</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block font-medium mb-1">Danh mục</label>
                        <select
                            name="categoryId"
                            value={product.categoryId}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        >
                            <option value="1">Coffee</option>
                            <option value="2">Cold Drink</option>
                            <option value="3">Bakery</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block font-medium mb-1">Giá (VNĐ)</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium mb-1">Mô tả</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            rows="3"
                            required
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block font-medium mb-1">Tên file ảnh (.avif)</label>
                        <input
                            type="text"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>

                    {/* Famous */}
                    <div>
                        <label className="block font-medium mb-1">Nổi bật</label>
                        <select
                            name="famous"
                            value={product.famous}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        >
                            <option value="0">Không</option>
                            <option value="1">Có</option>
                        </select>
                    </div>

                    {/* Sizes */}
                    <div>
                        <label className="block font-medium mb-1">Kích cỡ</label>
                        <div className="flex gap-4">
                            {['S', 'M', 'L'].map((size) => (
                                <label key={size} className="flex items-center gap-1">
                                    <input
                                        type="checkbox"
                                        checked={product.sizes.includes(size)}
                                        onChange={() => handleSizesChange(size)}
                                    />
                                    {size}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
                    >
                        Thêm
                    </button>
                </form>

                {message && (
                    <p className="mt-4 text-center text-sm font-medium text-green-700">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AddItem;
