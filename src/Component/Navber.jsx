import React, { useState } from 'react'
import Container from './Container'
import logo from '../assets/Logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router';





const Navber = () => {

    const [isopen, setIsopen] = useState(false)
    const toggolemeno = () => {
        setIsopen(!isopen)
    }

    return (
        <>

            <Container>
                <div className=' flex justify-between items-center h-[38px] mt-10 '>
                    <div>
                        <NavLink to='/'><img src={logo} alt="" /></NavLink>
                    </div>
                    <div>
                        <ul className='hidden md:flex gap-[48px] '>
                            <NavLink to='/' className=' hover:underline'>Home</NavLink >
                            <NavLink to='/contact' className=' hover:underline'>Contact</NavLink>
                            <NavLink to='/about' className=' hover:underline'>About</NavLink >
                            <NavLink to='signup' className=' hover:underline'>Sign Up</NavLink>
                        </ul>
                    </div>
                    <div className='hidden md:flex '>
                        <div className='relative'>
                            <input type="text" placeholder='What are you looking for?' className=' py-[7px] pl-5 pr-12 focus:outline-none bg-[#F5F5F5] rounded-[4px] text-[16px]' />
                            <HiMagnifyingGlass className=' absolute right-2 top-1/2 -translate-y-1/2 text-2xl' />
                        </div>
                        <div className='flex items-center ml-4 gap-4 text-2xl'>
                            <AiOutlineHeart />
                            <HiOutlineShoppingCart />
                        </div>
                    </div>
                    <button className='text-3xl cursor-pointer block md:hidden' onClick={toggolemeno}>
                        {
                            isopen ? (
                                <IoMdClose />
                            ) : (
                                <AiOutlineUnorderedList />
                            )
                        }
                    </button>
                    <div className={`fixed  top-[140px] left-0 w-full h-[300px] bg-amber-500 z-50 transform transition-transform duration-300 ease-in-out ${isopen ? 'translate-x-0' : '-translate-x-full'}`}>


                        <div className='flex items-center '>
                            <div className='relative'>
                                <input type="text" placeholder='What are you looking for?' className=' py-[7px] pl-5 pr-12 focus:outline-none bg-[#F5F5F5] rounded-[4px] text-[16px]' />
                                <HiMagnifyingGlass className=' absolute right-2 top-1/2 -translate-y-1/2 text-2xl' />
                            </div>
                            <div className='flex items-center ml-4 gap-4 text-2xl text-white'>
                                <AiOutlineHeart />
                                <HiOutlineShoppingCart />
                            </div>
                        </div>
                        <ul className='flex flex-col items-center mt-[100px] gap-8 h-full text-white font-bold'>
                            <li className=' hover:underline'><a href="#Home">Home</a></li>
                            <li className=' hover:underline'><a href="#Contact">Contact</a></li>
                            <li className=' hover:underline'><a href="#About">About</a></li>
                            <li className=' hover:underline'><a href="#Sing Up">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </Container>

            <div className='border-b-2 mt-4 border-[#b3b3b3] '></div>
        </>
    )
}

export default Navber
