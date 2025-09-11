import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-[#fcf3d9] px-4 sm:px-8 md:px-16 lg:px-36 py-12 md:py-20 lg:py-24 border-t border-[#eadcb5] text-[#1d4e1a] min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
                        Our Story
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-[#3b3b3b]">
                        Welcome to <span className="font-semibold text-[#1d4e1a]">Green Brew</span> — where every cup of coffee is a journey.
                        We started with a small passion for the pure taste of coffee and a desire to share that refinement with everyone. Each coffee bean is carefully selected from organic farms in the Vietnamese highlands, where the red basalt soil and cool climate create a unique flavor found nowhere else.
                    </p>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-[#3b3b3b]">
                        Green Brew is not just a coffee shop, but a community that values quality, kindness, and connection through every moment of enjoyment. Each product is the result of respect for nature, craftsmanship, and the art of brewing.
                    </p>
                </div>

                {/* Image Section */}
                <div className="rounded-3xl overflow-hidden shadow-2xl h-56 sm:h-72 md:h-96 lg:h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
                        alt="Green Brew Coffee"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Vision & Values */}
            <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
                {[
                    {
                        icon: '🌿',
                        title: 'Natural & Sustainable',
                        desc: 'Organic ingredients, eco-friendly processes.',
                    },
                    {
                        icon: '☕',
                        title: 'Art of Brewing',
                        desc: 'Precise techniques, refined flavors.',
                    },
                    {
                        icon: '🤝',
                        title: 'Community Connection',
                        desc: 'A place to meet and share inspiration every day.',
                    },
                ].map((item, index) => (
                    <div key={index}>
                        <h3 className="text-lg md:text-xl font-semibold mb-1">
                            {item.icon} {item.title}
                        </h3>
                        <p className="text-[#3b3b3b] text-sm md:text-base">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 md:mt-16 lg:mt-20 text-center">
                <p className="text-base md:text-xl text-[#3b3b3b] mb-6">
                    Come and experience the authentic taste with us at <span className="font-semibold text-[#1d4e1a]">Green Brew</span> — where you’ll find relaxation and inspiration every day.
                </p>
                <Link
                    to="/product"
                    className="bg-[#1d4e1a] text-[#fdf6e3] px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-[#fdf6e3] hover:text-[#1d4e1a] hover:border hover:border-[#1d4e1a] transition"
                >
                    View Menu
                </Link>
            </div>
        </div>
    );
};

export default About;