import React from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa'; // icon 3 chấm

const Header = ({ user, setUser }) => {
    const [open, setOpen] = React.useState(false);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setOpen(false);
        window.location.href = '/';
    };

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className="flex items-center h-24 px-10 bg-[#1d4e1a] text-[#FFECB8] relative">
            {/* Left */}
            <div className="flex-1"></div>

            {/* Center menu */}
            <div className="flex-1 flex justify-center items-center gap-8">
                <Link className="hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full" to="/product">Menu</Link>
                <Link className="hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full" to="/location">Locations</Link>
                <Link className="border p-2 rounded-full bg-[#FFECB8]" to="/">
                    <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fccb954e77c661a593dbd5_Symbol.svg" alt="Logo" className="w-8 h-8" />
                </Link>
                <Link className="hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full" to="/about">About Us</Link>
                <Link className="hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full" to="/news">News</Link>
            </div>

            {/* Right */}
            <div className="flex-1 flex justify-end items-center gap-3 pr-4 relative">
                {user ? (
                    <>
            <span className="text-sm sm:text-base">
              👋 Xin chào, <strong>{user.name || user.username}</strong>
            </span>
                        <button onClick={handleLogout} className="hover:underline text-xs sm:text-sm">
                            Đăng xuất
                        </button>

                        {/* Admin menu */}
                        {user.username === 'admin' && (
                            <div className="relative">
                                <button
                                    onClick={handleToggle}
                                    className="p-2 rounded-full hover:bg-[#FFECB8] hover:text-[#1d4e1a] transition"
                                >
                                    <FaEllipsisV />
                                </button>

                                {open && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white text-[#1d4e1a] shadow-lg rounded-lg overflow-hidden z-50">
                                        <Link
                                            to="/add-user"
                                            className="block px-4 py-2 hover:bg-[#FFECB8] transition"
                                            onClick={() => setOpen(false)}
                                        >
                                            ➕ Thêm tài khoản
                                        </Link>
                                        <Link
                                            to="/add-item"
                                            className="block px-4 py-2 hover:bg-[#FFECB8] transition"
                                            onClick={() => setOpen(false)}
                                        >
                                            🍔 Thêm sản phẩm
                                        </Link>
                                        <Link
                                            to="/add-categories"
                                            className="block px-4 py-2 hover:bg-[#FFECB8] transition"
                                            onClick={() => setOpen(false)}
                                        >
                                            📂 Thêm Categories
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <Link
                        className="hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-3 py-1 rounded-full"
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
