import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [product, setProduct] = useState({
        name: '',
        image: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                'http://localhost/menu-api/add-categories.php',
                product,
                { headers: { 'Content-Type': 'application/json' } }
            );
            setMessage(res.data.message || 'Thêm item thành công!');
            setProduct({ name: '', image: '' }); // reset form
        } catch (error) {
            console.error("Error sending data:", error);
            setMessage("Lỗi khi gửi dữ liệu");
        }
    };

    return (
        <div className="bg-[#FFECB8] flex justify-center min-h-screen py-10">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Thêm Categories Mới</h2>
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
