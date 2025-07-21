import React from 'react'
import { menuItems } from './Data'
import Card from './Card'

const Famous = () => {
  return (
    <div className='border-t border-[#1d4e1a]'>
      {menuItems.filter(item => item.famous).length > 0 && (
        <div className='bg-[#f7e3a8] py-20'>
            <div className='text-center'>
            <p className='text-[#1d4e1a] font-bold text-6xl'>
              Our Famous<br /><span>Drinks</span>
            </p>
          </div>

          <div className='flex justify-center items-center gap-32 py-20 flex-wrap'>
            {menuItems
              .filter(item => item.famous)
              .map((item, index) => (
                <Card
                  key={item.id} // Assuming each item has a unique id
                  to={`/product/${item.id}`}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
          </div>
          <div className=' flex items-center justify-center '><p className='rounded-4xl bg-[#1d4e1a] p-3 text-[#f7e3a8]'>Explore Menu</p></div>
        </div>
      )}
      
    </div>
  )
}

export default Famous
