import React from 'react';
import { useParams } from 'react-router-dom';
import { menuItems } from '../components/Data';
import Card from '../components/Card';
import { useEffect } from 'react';
const ProductDetail = () => {
     useEffect(() => {
    // Cuộn lên đầu trang mỗi khi component này được render
        window.scrollTo(0, 0);
    }, []);
    const [choose, setChoose] = React.useState('');

    const handleSizeClick = (size) => {
        setChoose(size);
    };

    const handleOrderClick = () => {
        alert(`Đặt hàng thành công với kích cỡ: ${choose}`);
    };

    const { id } = useParams();
    const product = menuItems.find((item) => item.id === parseInt(id));

    if (!product) return <div className="p-8 text-red-500">Không tìm thấy sản phẩm</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdf6e3] to-[#e0e7df] px-4 sm:px-6 md:px-10 py-10 sm:py-16 flex flex-col items-center">
            <div className="flex flex-col lg:flex-row gap-10 bg-white/80 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-6xl w-full border border-[#e5e7eb]">
                <div className="w-full lg:w-[400px] h-[300px] sm:h-[400px] lg:h-[450px] rounded-3xl shadow-lg bg-[#1d4e1a] flex items-center justify-center overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover rounded-3xl transform hover:scale-105 transition duration-300 w-full h-full"
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <p className="text-[#1d4e1a] font-extrabold text-3xl sm:text-4xl md:text-5xl mb-2">{product.name}</p>
                        <p className="text-green-800 font-bold text-2xl sm:text-3xl mb-4">{product.price}đ</p>
                        <hr className="border-green-100 mb-4" />
                        <p className="text-green-900 font-medium text-base sm:text-lg mb-6">{product.description}</p>

                        <div>
                            <p className="text-green-800 font-bold text-lg sm:text-xl mb-2">Available Sizes</p>
                            <div className="flex flex-wrap gap-4 mt-2">
                                {product.sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`cursor-pointer border-2 px-4 py-2 rounded-full font-semibold text-base sm:text-lg transition-all duration-200
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

                    <div className="pt-8">
                        <button
                            className="w-full sm:w-auto bg-[#1d4e1a] text-[#fdf6e3] px-8 py-3 rounded-full text-lg sm:text-xl font-bold shadow-lg border-2 border-[#1d4e1a] transition-all duration-200
                                hover:bg-[#fdf6e3] hover:text-[#1d4e1a] hover:scale-105"
                            onClick={handleOrderClick}
                        >
                            Order
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full mt-20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#1d4e1a] font-medium text-center mb-12">
                    You'll Love These Too
                </h1>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 px-2">
                    {menuItems
                        .filter((item) => item.famous)
                        .map((item) => (
                            <Card
                                key={item.id}
                                to={`/product/${item.id}`}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
