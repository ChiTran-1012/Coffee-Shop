import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { menuItems } from './Data';
import Card from './Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [choose, setChoose] = useState('');
    const [related, setRelated] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setLoading(true);
        const found = menuItems.find(item => item.id === Number(id));
        if (found) {
            setProduct(found);
            setError('');
            // Lấy các sản phẩm cùng loại, khác id hiện tại
            const relatedItems = menuItems.filter(
                item => item.categoryId === found.categoryId && item.id !== found.id
            ).slice(0, 3); // lấy tối đa 3 sản phẩm
            setRelated(relatedItems);
        } else {
            setError('Không tìm thấy sản phẩm!');
            setProduct(null);
            setRelated([]);
        }
        setLoading(false);
    }, [id]);

    const handleSizeClick = (size) => setChoose(size);

    const handleOrderClick = () => {
        if (!choose) {
            toast.warn('🌟 Vui lòng chọn kích cỡ trước khi đặt hàng!', {
                position: "top-center",
                autoClose: 2000,
            });
        } else {
            toast.success(`✅ Đặt hàng thành công!\nBạn đã chọn kích cỡ: ${choose}`, {
                position: "top-center",
                autoClose: 2000,
            });
        }
    };

    if (loading) return <div className="p-8">Đang tải dữ liệu...</div>;
    if (error || !product) return <div className="p-8 text-red-500">{error}</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdf6e3] to-[#e0e7df] px-4 sm:px-6 md:px-10 py-10 sm:py-16 flex flex-col items-center">
            <ToastContainer />
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
                                {product.sizes?.map((size, index) => (
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

            {/* You may also like */}
            {related.length > 0 && (
                <div className="w-full max-w-6xl mt-16">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1d4e1a] mb-8 text-center">You may also like</h3>
                    <div className="flex flex-wrap justify-center gap-24">
                        {related.map(item => (
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
            )}
        </div>
    );
};

export default ProductDetail;
