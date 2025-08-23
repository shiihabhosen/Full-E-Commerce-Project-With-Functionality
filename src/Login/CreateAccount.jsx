import React from 'react'
import loginimg from '../assets/loginimg.png'
import Container from '../Component/Container'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router';

const CreateAccount = () => {
    return (
        <>
            <Container>
                <div>
                    <div className='w-full h-[781px] flex justify-between gap-[100px] items-center mt-[80px] mb-[140px]'>
                        <div className='absolute left-0'><img src={loginimg} alt="" /></div>
                        <div className='w-[371px] h-[530px] ml-[795px] '>
                            <h2 className='text-[35px] font-medium'>Create an account</h2>
                            <p className='text-4 font-medium'>Enter your details below</p>
                            <div className="relative w-full mt-6">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="peer w-full border-b-2 border-gray-400 bg-transparent pt-6 pb-1 text-gray-900 placeholder-transparent focus:border-red-500 focus:outline-none"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 top-1 text-gray-500 text-sm transition-all duration-200
                                    peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-700">Name</label>
                            </div>
                            <div className="relative w-full mt-6">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="peer w-full border-b-2 border-gray-400 bg-transparent pt-6 pb-1 text-gray-900 placeholder-transparent focus:border-red-500 focus:outline-none"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 top-1 text-gray-500 text-sm transition-all duration-200
                                    peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-700">Email or Phone Number</label>
                            </div>
                            <div className="relative w-full mt-6">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="peer w-full border-b-2 border-gray-400 bg-transparent pt-6 pb-1 text-gray-900 placeholder-transparent focus:border-red-500 focus:outline-none"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 top-1 text-gray-500 text-sm transition-all duration-200
                                    peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:top- peer-focus:text-sm peer-focus:text-gray-700">Password</label>
                            </div>
                            <div className='w-full py-4 bg-[#DB4444] rounded-[4px] text-white text-center cursor-pointer mt-10 '>Create Account</div>

                            <div className=" py-4 px-6 border-2 border-gray-300 rounded-[4px]  mx-auto cursor-pointer mt-10  flex gap-3 items-center">
                                <FcGoogle size={24} />
                                <p>Sign up with Google</p>
                            </div>
                            <h5 className='mt-[30px] text-center text-[#4d4d4d]'>Already have account?<span className='border-b-2 ml-2.5'><NavLink to='/login' href="">Log in</NavLink></span> </h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CreateAccount
