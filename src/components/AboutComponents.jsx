import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#fcf3d9] px-6 py-24 lg:px-36 border-t border-[#eadcb5] text-[#1d4e1a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-5xl font-bold mb-6 leading-snug">
            Câu chuyện của chúng tôi
          </h2>
          <p className="text-lg leading-relaxed text-[#3b3b3b]">
            Chào mừng bạn đến với <span className="font-semibold text-[#1d4e1a]">Green Brew</span> — nơi mỗi tách cà phê là một hành trình.
            Chúng tôi khởi đầu từ một niềm đam mê nhỏ với hương vị cà phê thuần khiết và mong muốn chia sẻ sự tinh tế đó với mọi người. Từng hạt cà phê được lựa chọn từ các nông trại hữu cơ tại vùng cao nguyên Việt Nam, nơi đất đỏ bazan và khí hậu mát mẻ tạo nên hương vị đặc trưng không đâu có được.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#3b3b3b]">
            Green Brew không chỉ là một quán cà phê, mà là một cộng đồng yêu chất lượng, yêu sự tử tế và kết nối qua từng lần thưởng thức. Mỗi sản phẩm là kết quả của sự tôn trọng thiên nhiên, lao động thủ công và nghệ thuật pha chế.
          </p>
        </div>

        {/* Image Section */}
        <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="Green Brew Coffee"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Vision & Values */}
      
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
        {[
            {
            icon: '🌿',
            title: 'Tự nhiên & Bền vững',
            desc: 'Nguyên liệu hữu cơ, quy trình thân thiện môi trường.',
            },
            {
            icon: '☕',
            title: 'Nghệ thuật pha chế',
            desc: 'Pha chế chuẩn mực, hương vị tinh tế.',
            },
            {
            icon: '🤝',
            title: 'Cộng đồng kết nối',
            desc: 'Nơi gặp gỡ và lan toả cảm hứng mỗi ngày.',
            },
            ].map((item, index) => (
                <div key={index}>
                <h3 className="text-xl font-semibold mb-1">
                    {item.icon} {item.title}
                </h3>
                <p className="text-[#3b3b3b] text-sm">{item.desc}</p>
                </div>
            ))}
        </div>


      {/* Call to Action */}
      <div className="mt-20 text-center">
        <p className="text-xl text-[#3b3b3b] mb-6">
          Hãy đến và trải nghiệm hương vị nguyên bản cùng chúng tôi tại <span className="font-semibold text-[#1d4e1a]">Green Brew</span> — nơi bạn tìm thấy sự thư giãn và cảm hứng mỗi ngày.
        </p>
        <Link to="/product" className="bg-[#1d4e1a] text-[#fdf6e3] px-8 py-4 rounded-full text-lg hover:bg-[#fdf6e3] hover:text-[#1d4e1a] hover:border hover:border-[#1d4e1a] transition">
          Xem Menu
        </Link>
      </div>
    </div>
  );
};

export default About;
