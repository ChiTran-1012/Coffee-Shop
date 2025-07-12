import React from 'react';

const About = () => {
  return (
    <div className="border-t bg-[#fcf3d9] py-40 px-10 lg:px-36 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Text Section */}
      <div className="flex flex-col  px-40">
        <h2 className="text-[#1d4e1a] font-bold text-4xl lg:text-6xl leading-tight mb-10">
          Good Vibes. <br />
          <span className="text-[#1d4e1a]">Great Coffee.</span>
        </h2>
        <p className="text-[#1d4e1a] text-lg leading-relaxed">
          At Brewhaus, we serve great coffee and fresh pastries with care and passion, creating a warm, cozy space that feels like home.
        </p>

        <div className='grid grid-cols-2 gap-6 mt-10 text-2xl'>
          <div className='flex items-center gap-2 flex-col justify-center'>
            <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd10710404116158178ef2_Sweat%20Waterdrop.svg" alt="" className='border bg-[#1d4e1a] rounded-full p-2'/>
            <p className='text-center'>Great Coffee,<br></br>Tassty Sips</p>
          </div>
          <div className='flex items-center gap-2 flex-col justify-center'>
            <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1071d296363b2ce9ef78_Heart.svg" alt="" className='border bg-[#1d4e1a] rounded-full p-2'/>
            <p className='text-center'>Warm, Cozy<br></br>Atmostphere </p>
          </div >
          <div className='flex items-center gap-2 flex-col justify-center'>
            <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1071d296363b2ce9ef6e_Smile.svg" alt="" className='border bg-[#1d4e1a] rounded-full p-2'/>
            <p className='text-center'>Speedy Service<br></br>with a Smile</p>
          </div>
          <div className='flex items-center gap-2 flex-col justify-center'>
            <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd107167e1523f7eb5a9da_Home.svg" alt="" className='border bg-[#1d4e1a] rounded-full p-2'/>
            <p className='text-center'>Local &<br></br> Sustainable</p>
          </div>
        </div>




      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 gap-4 items-start">
        {/* Large Image */}
        <img
          src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11bfc82841763bc93a7b_medium-shot-barista-with-mask-preparing-coffee.avif"
          alt="Barista"
          className="w-full h-[650px] object-cover rounded-2xl shadow-lg col-span-1"
        />

        {/* Smaller Column with 2 stacked images */}
        <div className="grid grid-rows-2 gap-4 h-[650px]">
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
