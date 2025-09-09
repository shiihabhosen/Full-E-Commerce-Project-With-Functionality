import React from 'react'
import Container from '../Component/Container'
import { ImBin } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";



const WishlistCard = ({ children, img, classNameBox, productName, price, oldprice, reviwretting }) => {
    return (
        <>
            <Container>
                <div className='w-full h-[438px] '>
                    <div className='w-full h-[322px] mt-[60px] '>
                        <div className={`${classNameBox} group relative w-[270px] h-[360px] overflow-hidden `}>

                            <div className='w-full h-[270px] bg-white rounded-[4px] flex justify-center items-center top-0' >

                                <img src={img} alt="" />
                            </div>
                            <div className='flex justify-between py-3 px-3 -mt-[260px]' >
                                <div>
                                    {children}
                                </div>
                                <div>
                                    <ImBin className='text-2xl cursor-pointer' />
                                </div>
                            </div>
                            <div className="absolute bottom-[80px] left-0 right-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-3">
                                <button className="w-full bg-black text-white py-2 rounded-[4px] font-medium text-sm cursor-pointer">
                                    {/* <div className='flex items-center gap-2 justify-center'>
                                        <IoCartOutline className='text-2xl' />
                                        <h4> Add To Cart</h4>
                                    </div> */}
                                </button>
                            </div>
                            <div className='mt-[230px] px-3'>
                                <h4 className='text-[16px] font-medium'>{productName}</h4>
                                <div className='flex gap-2 py-0.5'>
                                    <h4 className='text-[#DB4444] text-[16px] font-medium'>{price}</h4>
                                    <h4 className='text-[#808080] text-[16px] font-medium line-through'>{oldprice}</h4>
                                </div>
                                <div className='flex text-[#FFAD33] gap-0.5 items-center'>
                                    <div className='flex text-[#FFAD33] gap-0.5 items-center'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <span className='text-[#808080] pl-3'>{reviwretting}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default WishlistCard
