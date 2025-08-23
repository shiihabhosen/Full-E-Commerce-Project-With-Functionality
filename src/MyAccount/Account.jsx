import React from 'react'
import Container from '../Component/Container'
import { useState } from "react";
import Button from '../Component/Button'
import BreadCrumb from '../Component/BreadCrumb';



const Account = () => {
    const [activeLink, setActiveLink] = useState("profile1");
    return (
        <>
            <Container>
                <BreadCrumb/>
                <div className='flex justify-between font-medium py-[80px]'>
                    <h6>My Account</h6>
                    <h6>Welcone! <span className='text-[#DB4444]'>Shihab Hosen</span></h6>
                </div>
                <div className='flex justify-between'>
                    <div>
                        {/* account active link*/}
                        <div className="w-[200px] h-[383px] p-4">
                            <h5 className="font-medium mb-3">Manage My Account</h5>
                            <div className="ml-5 space-y-2">
                                <p><a href="#" onClick={() => setActiveLink("profile1")}
                                    className={`block  rounded ${activeLink === "profile1"
                                        ? "bg-white text-[#DB4444] font-semibold"
                                        : "text-gray-700 "
                                        }`}>My Profile</a>
                                </p>
                                <p><a href="#" onClick={() => setActiveLink("profile2")}
                                    className={`block  rounded ${activeLink === "profile2"
                                        ? "bg-white text-[#DB4444] font-semibold"
                                        : "text-gray-700 "
                                        }`} > Address Book</a>
                                </p>
                                <p><a href="#" onClick={() => setActiveLink("profile3")}
                                    className={`block  rounded ${activeLink === "profile3"
                                        ? "bg-white text-[#DB4444] font-medium"
                                        : "text-gray-700 "
                                        }`}>My Payment Options </a>
                                </p>
                            </div>
                            <div className='mt-5'>
                                <h5 className="font-medium mb-3">My Orders</h5>
                                <div className="ml-5 space-y-2">
                                    <p><a href="#" onClick={() => setActiveLink("profile1")}
                                        className={`block  rounded ${activeLink === "profile1"
                                            ? "bg-white text-[#DB4444] font-semibold"
                                            : "text-gray-700 "
                                            }`}>My Returns</a>
                                    </p>
                                    <p><a href="#" onClick={() => setActiveLink("profile2")}
                                        className={`block  rounded ${activeLink === "profile2"
                                            ? "bg-white text-[#DB4444] font-semibold"
                                            : "text-gray-700 "
                                            }`} >My Cancellations</a>
                                    </p>
                                    <p><a href="#" onClick={() => setActiveLink("profile3")}
                                        className={`block  rounded ${activeLink === "profile3"
                                            ? "bg-white text-[#DB4444] font-medium"
                                            : "text-gray-700 "
                                            }`}>My Payment Options </a>
                                    </p>
                                </div>
                                <h5 className="font-medium mt-3">My WishList</h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-[870px] h-[630px] mx-auto flex justify-center items-center'>
                        <div className='w-[710px] h-[550px]'>
                            <h5 className='text-[#DB4444] text-[20px] font-medium'>Edit Your Profile</h5>

                            {/* edit profile */}
                            <div className='flex justify-between py-4'>
                                <div className="">
                                    <label className="block text-lg font-medium mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder='Shihab'
                                        className="w-[320px] bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-[#DB4444]"
                                    />
                                </div>
                                <div className="">
                                    <label className="block text-lg font-medium mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder='Hosen'
                                        className="w-[320px] bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-[#DB4444]"
                                    />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className="">
                                    <label className="block text-lg font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder='shiihabhosen@gmail.com'
                                        className="w-[320px] bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-[#DB4444]"
                                    />
                                </div>
                                <div className="">
                                    <label className="block text-lg font-medium mb-2">
                                        Address
                                    </label>
                                    <input
                                        type="address"
                                        placeholder='Akkelpur,Joypurhat,Bangladesh'
                                        className="w-[320px] bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-[#DB4444]"
                                    />
                                </div>
                            </div>
                            {/* password changes */}
                            <div className='space-y-4 mt-5'>
                                <div className="w-full ">
                                    <label className="block text-gray-600 text-lg font-medium mb-2">
                                        Password Changes<span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder='Current Passwod'
                                        className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                    />
                                </div>
                                <div className="w-full ">
                                    <input
                                        type="text"
                                        placeholder='New Passwod'
                                        className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                    />
                                </div>
                                <div className="w-full ">
                                    <input
                                        type="text"
                                        placeholder='Confirm New Passwod'
                                        className="w-full bg-gray-100 border border-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-end items-center gap-8 mt-6'>
                                    <p className='font-medium'><a href="">Cancel</a></p>
                                     <Button btntext='Save Changes' className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Account
