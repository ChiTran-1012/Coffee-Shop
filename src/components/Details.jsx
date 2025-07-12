import React from 'react';
import { useParams } from 'react-router-dom';
import { menuItems } from '../components/Data';

const ProductDetail = () => {
    const [choose, setChoose] = React.useState('');

    const handleSizeClick = (size) => {
        setChoose(size);
    };
    const handleOrderClick = () => {
        // Handle order logic here
        alert(`Đặt hàng thành công với kích cỡ: ${choose}`);
    };

    const { id } = useParams();
    const product = menuItems.find((item) => item.id === parseInt(id));

    if (!product) return <div className="p-8 text-red-500">Không tìm thấy sản phẩm</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdf6e3] to-[#e0e7df] px-10 py-16 flex justify-center items-center">
            <div className="flex gap-16 bg-white/80 rounded-3xl shadow-2xl p-12 max-w-5xl w-full border border-[#e5e7eb]">
                <div className="w-96 h-96 rounded-3xl shadow-lg bg-[#1d4e1a] flex items-center justify-center overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover rounded-3xl transform hover:scale-105 transition duration-300 w-full h-full"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <p className="text-[#1d4e1a] font-extrabold text-5xl mb-2 tracking-tight">{product.name}</p>
                        <p className="text-green-800 font-bold text-3xl mb-4">{product.price}đ</p>
                        <hr className="border-green-100 mb-4" />
                        <p className="text-green-900 font-medium text-lg mb-6">{product.description}</p>
                        <div>
                            <p className="text-green-800 font-bold text-xl mb-2">Available Sizes</p>
                            <div className="flex gap-4 mt-2">
                                {product.sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`cursor-pointer border-2 px-5 py-2 rounded-full font-semibold text-lg transition-all duration-200
                                            ${choose === size
                                                ? 'bg-green-800 text-[#fdf6e3] border-green-800 scale-105 shadow-md'
                                                : 'border-green-800 text-green-800 hover:bg-green-800 hover:text-[#fdf6e3] hover:scale-105'}`}
                                        onClick={() => handleSizeClick(size)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 flex">
                        <button
                            className="bg-[#1d4e1a] text-[#fdf6e3] px-8 py-3 rounded-full text-xl font-bold shadow-lg border-2 border-[#1d4e1a] transition-all duration-200
                                hover:bg-[#fdf6e3] hover:text-[#1d4e1a] hover:border-[#1d4e1a] hover:scale-105"
                        
                            onClick={handleOrderClick}>
                            Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;