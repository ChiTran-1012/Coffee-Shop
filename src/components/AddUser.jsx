import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("📤 Dữ liệu gửi đi:", formData);

        try {
            const res = await axios.post(
                'http://localhost/menu-api/add-user.php',
                formData,
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log("📥 Phản hồi từ PHP:", res.data);
            setMessage(res.data.message);
        } catch (error) {
            console.error("❌ Lỗi khi gửi dữ liệu:", error);
            setMessage("Lỗi khi gửi dữ liệu");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFECB8] to-[#FFD580] p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

                {/* Tiêu đề */}
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                    Thêm tài khoản
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Nhập tên đăng nhập"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-200 shadow"
                    >
                        Thêm tài khoản
                    </button>
                </form>

                {/* Message */}
                {message && (
                    <p className="mt-5 text-center text-sm text-gray-700 bg-gray-100 py-2 rounded">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AddUser;
