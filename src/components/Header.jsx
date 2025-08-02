import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, setUser }) => {

  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setOpen(false); // Đóng modal khi đăng xuất
    window.location.href = '/'; // Chuyển hướng về trang chủ
  };
  const handleOpen = 
    () => {
      // Logic to open the modal or perform any action
     setOpen(!open);
    };

  return (
    <div className='flex items-center h-24 px-10 bg-[#1d4e1a] text-[#FFECB8] py-20'>
      {/* Left (trống hoặc thêm logo nhỏ nếu muốn) */}
      <div className='flex-1'></div>

      {/* Center (Menu links) */}
      <div className='flex-1 flex justify-center items-center gap-8'>
        <Link className='hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full' to="/product">Menu</Link>
        <Link className='hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full' to="/location">Locations</Link>
        <Link className='border p-2 rounded-full bg-[#FFECB8]' to="/">
          <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fccb954e77c661a593dbd5_Symbol.svg" alt="Logo" className='w-8 h-8' />
        </Link>
        <Link className='hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full' to="/about">About Us</Link>
        <Link className='hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full' to="/news">News</Link>
      </div>

      {/* Right (Login / Logout) */}
      <div className='flex-1 flex justify-end items-center gap-3 pr-4'>
        {user ? (
          <>
            <span className="text-sm sm:text-base">
              👋 Xin chào, <strong>{user.name || user.username}</strong>
            </span>
            <button onClick={handleLogout} className="hover:underline text-xs sm:text-sm">
              Đăng xuất
            </button>

            {/* Nếu là admin thì hiển thị nút mở */}
            {user.username === 'admin' && (
              <button onClick={handleOpen}>Cai deo gi day</button>
            )}

            {/* Nếu là admin và đang mở dropdown thì hiển thị */}
            {user.username === 'admin' && open && (
              <div className="absolute top-26 right-10 bg-white shadow-lg rounded p-4">
                <Link to="/add-user" className="text-lg text-[#1d4e1a] font-bold mb-2">
                  Thêm tài khoản
                </Link><br></br>
                <Link to="/add-item" className="text-lg text-[#1d4e1a] font-bold mb-2">
                  Thêm sản phẩm
                </Link>
              </div>
            )}
          </>
        ) : (
          <Link
            className='hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full'
            to="/login"
          >
            Login
          </Link>
        )}
      </div>

    </div>
  );
};

export default Header;
