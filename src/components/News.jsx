import React from 'react';

const newsItems = [
  {
    title: "🎉 New Seasonal Drinks!",
    date: "July 1, 2025",
    summary: "Try our new summer collection featuring iced matcha, tropical cold brews, and fruity refreshers.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    title: "☕ Barista Workshop Open!",
    date: "June 20, 2025",
    summary: "Join us for an interactive coffee workshop this weekend. Learn how to brew like a pro!",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e",
  },
  {
    title: "🏆 Brewhaus Wins Local Coffee Award",
    date: "June 5, 2025",
    summary: "We’re honored to be voted Best Local Coffee House by the HCMC Coffee Community.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
];

const News = () => {
  return (
    <div className="bg-[#fcf3d9] py-24 px-4 sm:px-8 md:px-16 lg:px-36 border-t h-screen">
      {/* Tiêu đề */}
      <div className="text-center mb-16">
        <h2 className="text-[#1d4e1a] font-bold text-4xl sm:text-5xl mb-4">
          Brewhaus News & Updates
        </h2>
        <p className="text-[#1d4e1a] text-lg">
          Stay in the loop with our latest happenings and special offers.
        </p>
      </div>

      {/* Danh sách tin tức */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#1d4e1a] transition-transform duration-300 hover:scale-105">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-[#1d4e1a]">
              <p className="text-sm font-semibold text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-base leading-relaxed">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
