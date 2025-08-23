import React from 'react'
import Container from '../Component/Container'
import Gamepad from '../assets/Gamepad.png'
import Monitor from '../assets/Monitor.png'
import Button from '../Component/Button'


const CheckOut = () => {
    return (
        <>
            <Container>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-[36px] font-medium'>Billing Details</h3>
                        <div className='w-[470px] h-[814px] bg- mt-10'>
                            <div className="w-full">
                                <label className="block text-gray-600 text-lg font-medium mb-2">
                                    First Name<span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                />
                            </div>
                            <div className="w-full mt-[32px]">
                                <label className="block text-gray-600 text-lg font-medium mb-2">
                                    Company Name<span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                />
                            </div>
                            <div className="w-full mt-[32px]">
                                <label className="block text-gray-600 text-lg font-medium mb-2">
                                    Street Address<span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                />
                            </div>
                            <div className="w-full mt-[32px]">
                                <label className="block text-gray-600 text-lg font-medium mb-2">
                                    Apartment, floor, etc. (optional)<span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                />
                            </div>
                            <div className="w-full mt-[32px]">
                                <label className="block text-gray-600 text-lg font-medium mb-2">
                                    Town/City<span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                />
                            </div>
                            <div className="w-full mt-[32px]">
                                <label className="block text-gray-600 text-lg font-medium mb-2">
                                    Phone Number<span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                />
                            </div>
                            <div className="w-full mt-[32px]">
                                <label className="block text-gray-600 text-lg font-medium mb-2">
                                    Email Address<span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                />
                            </div>
                            <div className='flex items-center gap-[20px] mt-6'>
                                <input type="checkbox" className='w-5 h-5 ' />
                                <p className='text-[16px] font-medium'>Save this information for faster check-out next time</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[527px] h-[600px]'>
                        <div className='w-[425px] h-[140px]'>
                            <div className='w-full h-[54px] flex justify-between items-center '>
                                <div className='flex gap-6 items-center font-medium'>
                                    <img src={Gamepad} alt="" className='w-[54px] h-[54px]' />
                                    <p>LCD Monitor</p>
                                </div>
                                <p className='font-medium'>$650</p>
                            </div>
                            <div className='w-full h-[54px] mt-8 flex justify-between items-center '>
                                <div className='flex gap-6 items-center font-medium'>
                                    <img src={Monitor} alt="" className='w-[54px] h-[54px]' />
                                    <p>H1 Gamepad</p>
                                </div>
                                <p className='font-medium'>$1100</p>
                            </div>
                        </div>
                        <div className='w-[425px]   mt-8 '>
                            <div className='border-b-2 flex justify-between py-4 border-gray-300 font-medium'>
                                <p>Subtotal:</p>
                                <p>$1750</p>
                            </div>
                            <div className='border-b-2 flex justify-between py-4 border-gray-300 font-medium'>
                                <p>Shipping:</p>
                                <p>Free</p>
                            </div>
                            <div className=' flex justify-between py-4  font-medium'>
                                <p>Total:</p>
                                <p>$1750</p>
                            </div>

                        </div>

                        <div className='w-full flex gap-4 items-center py-8 '>
                             <input type="text" placeholder='Coupon Code' className='w-[300px] h-[56px] py-4 px-6 border-2 rounded-[4px] border-gray-200  focus:outline-none' />
                            <Button className=' text-white ' btntext='Apply Coupon' />
                        </div>
                        <Button className=' text-white ' btntext='Place Order' />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CheckOut
