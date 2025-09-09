import React from 'react'
import Container from './Container'
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import qrcode from '../assets/scancode.png'
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";



const Fotter = () => {
  return (
    <>
      <div className='w-full h-[440px] bg-black mt-[140px] '>
        <Container>
          <div className='w-full h-[236px]'>
            <div className='py-[80px] text-white flex justify-between' >
              <div>
                <h5 className='text-[24px] font-bold '>Exclusive</h5>
                <p className='text-[20px] font-bold py-6'>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className="relative mt-3 w-64">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full py-3 px-4 pr-10 border-2 border-white rounded-[4px] bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                  <HiOutlinePaperAirplane className="absolute text-2xl text-white right-3 top-1/2 transform -translate-y-1/2 cursor-pointer " />
                </div>
              </div>
              <div className='w-[175px] space-y-[24px]'>
                <h5 className='text-[20px] font-bold '>Support</h5>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
              </div>
              <div className='w-[123px] space-y-[20px]'>
                <h5 className='text-[20px] font-bold '>Account</h5>
                <p><a href="">My Account</a></p>
                <p><a href="">Login / Register</a></p>
                <p><a href="">Cart</a></p>
                <p><a href="">Wishlist</a></p>
                <p><a href="">Shop</a></p>
              </div>
              <div className='w-[109px] space-y-[20px]'>
                <h5 className='text-[20px] font-bold '>Quick Link</h5>
                <p><a href="">Privacy Policy</a></p>
                <p><a href="">Terms Of Use</a></p>
                <p><a href="">FAQ</a></p>
                <p><a href="">Contact</a></p>
              </div>
              <div>
                <h5 className='text-[20px] font-bold '>Download App</h5>
                <p className='text-[12px] font-medium pt-6 pb-2'>Save $3 with App New User Only</p>
                <img src={qrcode} alt="" />
                <div className='flex gap-6 text-2xl pt-6 cursor-pointer'>
                  <a href="https://www.facebook.com/shiihabhosen" target='_blank'> <RiFacebookLine /></a>
                  <a href="https://x.com/shiihabhosen" target='blank'> <FiTwitter /></a>
                  <a href="https://www.instagram.com/shiihab_hosen/" target='blank'><FaInstagram /></a>
                  <a href="https://www.linkedin.com/in/shiihabhosen01/" target='blank'><RiLinkedinLine /></a>
                </div>
              </div>
            </div>

          </div>
          <p className='text-white mt-[160px] text-center'>Copyright Shihab 2025. All right reserved by💚 <span className='font-bold text-[#be2edd]'><a href="https://wa.me/message/WPKJP6CGP3EVG1" target='blank'>Shihab Hosen</a></span></p>
        </Container>
      </div>
    </>
  )
}

export default Fotter
