import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { NavLink } from 'react-router';
import { Rate } from 'antd';



const ProductCard = ({ items, classNameBox }) => {
  if (!items) {
    return null;
  }
  return (

    <>

      <div className={`${classNameBox} group relative w-[270px] h-[360px] overflow-hidden  `}>

        <div className='w-full h-[270px] bg-white rounded-[4px] flex justify-center items-center'>
          <img src={items.thumbnail} alt=""/>
        </div>


        <div className='flex justify-between mx-3 -mt-[255px] '>
          <div className='w-[55px] h-[26px] rounded-[4px] bg-[#760b0b] flex justify-center items-center text-white text-[12px]'>
            {items.discountPercentage}%
          </div>
          <div className='space-y-2 '>
            <div className='w-[34px] h-[34px] rounded-full flex justify-center items-center bg-white text-2xl'>
              <IoMdHeartEmpty />
            </div>
            <div className='w-[34px] h-[34px] rounded-full flex justify-center items-center bg-white text-2xl'>
              <FiEye />
            </div>
          </div>
        </div>

        {/* ✅ Add to Cart button (initially hidden, shows on hover) */}
        <div className="absolute bottom-[80px] left-0 right-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-3">
          <NavLink to='/cart'>
            <button className="w-full bg-black text-white py-2 rounded-[4px] font-medium text-sm cursor-pointer">
              Add To Cart
            </button>
          </NavLink>
        </div>



        {/* Product Info */}
        <div className='mt-[190px] px-3'>
          <h4 className='text-[16px] font-medium'>{items.title}</h4>
          <div className='flex gap-2 py-0.5'>
            <h4 className='text-[#DB4444] text-[16px] font-medium'>${items.price}</h4>

            <h4 className='text-[#808080] text-[16px] font-medium line-through'> ${
              Math.floor(items.price / (1 - items.discountPercentage / 100))
            }</h4>
          </div>
          <div className='flex text-[#FFAD33] gap-0.5 items-center'>
            <Rate value={items.rating} />
            <span className='text-[#808080] pl-3'>{items.reviews[0].rating}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
