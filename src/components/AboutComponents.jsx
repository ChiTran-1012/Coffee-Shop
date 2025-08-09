import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-[#fcf3d9] px-6 py-24 lg:px-36 border-t border-[#eadcb5] text-[#1d4e1a] h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-5xl font-bold mb-6 leading-snug">
                        Our Story
                    </h2>
                    <p className="text-lg leading-relaxed text-[#3b3b3b]">
                        Welcome to <span className="font-semibold text-[#1d4e1a]">Green Brew</span> — where every cup of coffee is a journey.
                        We started with a small passion for the pure taste of coffee and a desire to share that refinement with everyone. Each coffee bean is carefully selected from organic farms in the Vietnamese highlands, where the red basalt soil and cool climate create a unique flavor found nowhere else.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-[#3b3b3b]">
                        Green Brew is not just a coffee shop, but a community that values quality, kindness, and connection through every moment of enjoyment. Each product is the result of respect for nature, craftsmanship, and the art of brewing.
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
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
                    Come and experience the authentic taste with us at <span className="font-semibold text-[#1d4e1a]">Green Brew</span> — where you’ll find relaxation and inspiration every day.
                </p>
                <Link
                    to="/product"
                    className="bg-[#1d4e1a] text-[#fdf6e3] px-8 py-4 rounded-full text-lg hover:bg-[#fdf6e3] hover:text-[#1d4e1a] hover:border hover:border-[#1d4e1a] transition"
                >
                    View Menu
                </Link>
            </div>
        </div>
    );
};

export default About;
