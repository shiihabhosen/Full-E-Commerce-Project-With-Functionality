import React from 'react'
import loginimg from '../assets/loginimg.png'
import Container from '../Component/Container'

const LoginPage = () => {
    return (
        <>
            <Container>
                <div className='w-full h-[781px] flex justify-between gap-[100px] items-center mt-[80px]'>
                <div className='absolute left-0'><img src={loginimg} alt="" /></div>
                <div className='w-[371px] h-[326px] ml-[795px]'>
                    <h2 className='text-[35px] font-medium'>Log in to Exclusive</h2>
                    <p className='text-4 pt-6 font-medium'>Enter your details below</p>
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
                                    peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-700">Password</label>
                    </div>
                    <div className='mt-10 flex justify-between items-center'>
                        <div className='py-4 px-12 bg-[#DB4444] inline-block text-white rounded-[4px] cursor-pointer'>Log In</div>
                        <p className='text-[#DB4444]'><a href="">Forget Password?</a></p>
                    </div>
                </div>
            </div>
            </Container>
        </>
    )
}

export default LoginPage
