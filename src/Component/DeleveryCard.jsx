import React from 'react'
import Container from './Container'

const DeleveryCard = ({ img, sectext, pera }) => {
    return (
        <>
            <Container>
                <div className='w-full h-[161px] flex justify-center'>
                     <div className='w-[249px] h-[161px]'>
                        <div className='w-[80px] h-[80px] rounded-full bg-[#c1c0c1] mx-auto flex justify-center items-center'>
                            <div className='w-[58px] h-[58px] bg-black rounded-full items-center flex justify-center '><img src={img} alt="" /></div>
                        </div>
                        <div className='pt-6'>
                            <h5 className='text-center text-[20px] font-semibold w-[260px] '>{sectext}</h5>
                            <p className='text-[13px] font-medium text-center pt-2 '>{pera}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default DeleveryCard
