import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className=' '>
        <p className='text-[#FFECB8] font-bold text-8xl flex justify-center items-center gap-4 flex-col'>Life Begins<br></br><span>After Coffee</span></p>
      </div>
      <div className='py-10'>
        <p className='text-[#FFECB8] text-lg'>Because great coffee is the start of something even greater</p>
      </div>
      <div className='flex justify-center items-center gap-8'>
        <button className='bg-[#FFECB8] text-[#1d4e1a] px-6 py-3 rounded-full text-lg  border-1 hover:bg-[#1d4e1a] hover:border-[#FFECB8] hover:text-[#FFECB8] '><Link to="/product">Explore Menu</Link></button>
        <button className='bg-[#FFECB8] text-[#1d4e1a] px-6 py-3 rounded-full text-lg  border-1 hover:bg-[#1d4e1a] hover:border-[#FFECB8] hover:text-[#FFECB8] '><Link to="/location">Our Locations</Link></button>
      </div>
      <div className='flex justify-center items-center gap-8 py-20'>
        <img
            src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c5977f8055b117d3fa_Cold%20Brew.avif"
            alt="Cold Brew"
            className='w-40 md:w-52 lg:w-80 transform -rotate-6 transition duration-300  rounded-xl '
        />
        <img
            src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c5a407d033860da151_Espresso.avif"
            alt="Espresso"
            className='w-40 md:w-52 lg:w-80 transform scale-110 transition duration-300 rounded-xl '
        />
        <img
            src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c56b860fe106f68269_Black%20Coffee.avif"
            alt="Black Coffee"
            className='w-40 md:w-52 lg:w-80 transform rotate-6 transition duration-300  rounded-xl '
        />
        </div>

    </div>
  )
}

export default Hero
