import React from 'react'
import Container from './Container'
import play from '../assets/play.png'
import NewText from './NewText'
import woman from '../assets/woman.png'
import speaker from '../assets/speaker.png'
import perfium from '../assets/perfium.png'



const New = () => {
    return (
        <>
            <Container>
                <div className='mt-[168px]'>
                    <div className='w-[216px] h-[108px] mx-auto '>
                        <div className='flex items-center gap-2 '>
                            <div className='w-5 h-10 bg-[#DB4444] rounded-[4px]'></div>
                            <p className='text-[#DB4444]'>Featured</p>
                        </div>
                        <h3 className='text-[36px] font-semibold pt-5'>New Arrival</h3>
                    </div>
                    <div className='w-full h-[600px]  mt-[50px] flex justify-between'>
                        <div className=''>
                            <div className='w-[570px] h-[600px] bg-black px-[30px] transform relative rounded-[4px]'><img src={play} alt="" className='pt-[90px] ' />
                            </div>
                            <NewText headding='PlayStation 5' pera='Black and White version of the PS5 coming out on sale.' />
                        </div>
                        <div>
                            <div className='w-[570px] h-[284px] rounded-[4px] bg-[#0D0D0D] flex items-end'>
                                <div className='w-[255px] h-[122px]' >
                                    <div className='w-[242px] h-[122px] absolute  transform -translate-y-[80px] translate-x-[32px] text-white'>
                                        <h2 className='text-[24px] font-semibold'>Women’s Collections</h2>
                                        <p className='text-[14px] font-normal py-4'>Featured woman collections that give you another vibe.</p>
                                        <button className='text-[16px] border-b-2'>Shop Now</button>
                                    </div>
                                </div>
                                <div>
                                    <img src={woman} alt="" />
                                </div>
                            </div>
                            <div className='w-[570px] h-[284px] rounded-[4px]  mt-[32px] flex  gap-x-7'>
                                <div className='w-[270px] h-[284px] bg-black py-[32px] px-[40px] transform relative rounded-[4px]'><img src={speaker} alt="" className='' />
                                </div>
                                <div className='w-[242px] h-[122px] absolute  transform translate-y-[160px] translate-x-[32px] text-white'>
                                    <h2 className='text-[24px] font-semibold'>Speakers</h2>
                                    <p className='text-[14px] font-normal py-2'>Amazon wireless speakers</p>
                                    <button className='text-[16px] border-b-2'>Shop Now</button>
                                </div>
                                <div className='w-[270px] h-[284px] bg-black py-[32px] px-[40px]  transform relative rounded-[4px]'><img src={perfium} alt="" />
                                    <div className='w-[242px] h-[122px] absolute  transform -translate-y-0 translate-x-[32px] bottom-0 left-0 text-white'>
                                        <h2 className='text-[24px] font-semibold'>Perfume</h2>
                                        <p className='text-[14px] font-normal py-2'>GUCCI INTENSE OUD EDP</p>
                                        <button className='text-[16px] border-b-2'>Shop Now</button>
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

export default New
