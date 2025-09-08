import React from 'react';

const About = () => {
  return (
    <div className="border-t bg-[#fcf3d9] py-16 px-4 sm:px-8 md:px-16 lg:px-36 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Text Section */}
      <div className="flex flex-col">
        <h2 className="text-[#1d4e1a] font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6 sm:mb-10">
          Good Vibes. <br />
          <span className="text-[#1d4e1a]">Great Coffee.</span>
        </h2>
        <p className="text-[#1d4e1a] text-base sm:text-lg leading-relaxed">
          At Brewhaus, we serve great coffee and fresh pastries with care and passion, creating a warm, cozy space that feels like home.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-10 text-base sm:text-xl">
          {[
            { icon: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd10710404116158178ef2_Sweat%20Waterdrop.svg", text: "Great Coffee,\nTasty Sips" },
            { icon: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1071d296363b2ce9ef78_Heart.svg", text: "Warm, Cozy\nAtmosphere" },
            { icon: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1071d296363b2ce9ef6e_Smile.svg", text: "Speedy Service\nwith a Smile" },
            { icon: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd107167e1523f7eb5a9da_Home.svg", text: "Local &\nSustainable" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 flex-col justify-center text-center">
              <img
                src={item.icon}
                alt=""
                className="border bg-[#1d4e1a] rounded-full p-2 w-14 h-14 sm:w-16 sm:h-16"
              />
              <p>{item.text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Large Image */}
        <img
          src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11bfc82841763bc93a7b_medium-shot-barista-with-mask-preparing-coffee.avif"
          alt="Barista"
          className="w-full h-64 sm:h-96 lg:h-[650px] object-cover rounded-2xl shadow-lg"
        />

        {/* Two stacked images in one column */}
        <div className="grid grid-rows-2 gap-4 h-64 sm:h-96 lg:h-[650px]">
          <img
            src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11bf98dbe39dd2a370be_interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.avif"
            alt="Interior"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <img
            src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11fedcb344bd7472203b_white-ceramic-teacup-brown-surface.avif"
            alt="Teacup"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
