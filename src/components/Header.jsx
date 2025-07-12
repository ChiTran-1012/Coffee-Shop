import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center items-center gap-16 text-[#FFECB8] h-16 py-20'>
      <Link className='hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-2 rounded-full'  to="/product">Menu</Link>
      <Link className='hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-2 rounded-full'  to="/">Locations</Link>
      <Link className='border p-2 rounded-full bg-[#FFECB8] '>
        <img src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fccb954e77c661a593dbd5_Symbol.svg" alt="" />
        </Link>
      <Link className='hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-2 rounded-full'  to="/">About Us</Link>
      <Link className='hover:border hover:bg-[#FFECB8] hover:text-[#1d4e1a] px-2 rounded-full'  to="/"> News</Link>
    </div>
  )
}

export default Header
