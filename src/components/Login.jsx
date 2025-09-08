import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost/menu-api/login.php', {
        username,
        password
      });

      if (res.data.success) {
        setMessage('✅ Đăng nhập thành công!');
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user); // Cập nhật lên App
        navigate('/');
      } else {
        setMessage('❌ ' + res.data.message);
      }
    } catch (err) {
      setMessage('⚠️ Lỗi kết nối đến máy chủ.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#fdf6e3]">
      <form onSubmit={handleLogin} className="bg-white shadow-lg p-10 rounded-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-[#1d4e1a] mb-6">Đăng nhập</h2>

        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#1d4e1a] text-white py-2 px-4 rounded hover:bg-[#145214] transition"
        >
          Đăng nhập
        </button>

        {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
