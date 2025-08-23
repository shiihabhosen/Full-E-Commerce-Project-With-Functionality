import React from 'react'
import Container from '../Component/Container'
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import Button from '../Component/Button';
import BreadCrumb from '../Component/BreadCrumb';


const Contact = () => {
    return (
        <>
            <Container>
                <BreadCrumb/>
                <div className='w-full h-[458px] flex justify-between items-center mt-[140px]'>
                    {/* company details */}
                    <div className='w-[340px] h-full'>
                        <div className='py-10 px-[35px]'>
                            <div className='flex items-center gap-4'>
                                <div className='w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center'>
                                    <IoCallOutline className='text-2xl text-white' />
                                </div>
                                <p className='text-[16px] font-medium '>Call To Us</p>
                            </div>
                            <p className='text-[14px] font-medium py-6'>We are available 24/7, 7 days a week.</p>
                            <p className='text-[14px] font-medium'>Phone: +8801611112222</p>
                            <div className='w-full h-0.5 bg-gray-500 my-[32px]'></div>
                            <div className='flex items-center gap-4'>
                                <div className='w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center'>
                                    <AiOutlineMail className='text-2xl text-white' />
                                </div>
                                <p className='text-[16px] font-medium '>Call To Us</p>
                            </div>
                            <p className='text-[14px] font-medium pt-6 w-[250px]'>Fill out our form and we will contact you within 24 hours.</p>
                            <p className='text-[14px] font-medium py-6'>Emails: customer@exclusive.com</p>
                            <p className='text-[14px] font-medium'>Emails: support@exclusive.com</p>
                        </div>
                    </div>
                    {/* submit your info */}

                    <div className='w-[800px] h-[457px]'>
                        <div className='py-10 px-[32px]'>
                            <div className='flex justify-between'>
                                <input type="text" placeholder='Your Name*' className='w-[235px] h-[50px] py-[13px] px-4 bg-[#F5F5F5] rounded-[4px] focus:outline-none' />
                                <input type="email" placeholder='Your Email *' className='w-[235px] h-[50px] py-[13px] px-4 bg-[#F5F5F5] rounded-[4px] focus:outline-none' />
                                <input type="call" placeholder='Your Phone *' className='w-[235px] h-[50px] py-[13px] px-4 bg-[#F5F5F5] rounded-[4px] focus:outline-none' />
                            </div>
                            <form className=" w-full h-[207px] my-[32px] ">

                                <textarea
                                    rows="6"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-100 text-gray-700 focus:outline-none resize-none mb-4"
                                ></textarea>
                             <div className='flex justify-end'>  <Button btntext='Send Massage' className='text-white'/></div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact
