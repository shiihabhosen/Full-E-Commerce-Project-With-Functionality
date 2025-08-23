import React from 'react'
import Container from '../Component/Container'


const AboutCard = ({ img, sectext, pera,teamimg }) => {
  return (
    <>
      <Container>
        {/* sales cound section */}
        <div className='w-full h-[230px] my-[140px]'>
          <div className='w-[270px] h-[230px] border-2 border-gray-200 rounded-[4px] hover:bg-[#DB4444] hover:text-white duration-500'>
            <div className='py-[30px] px-[50px]'>
              <div className='w-[80px] h-[80px] rounded-full bg-[#c1c0c1] mx-auto flex justify-center items-center '>
                <div className='w-[58px] h-[58px] bg-black rounded-full items-center flex justify-center '>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <h5 className='text-center text-[32px] font-bold w-[260px] '>{sectext}</h5>
            <p className='text-[13px] font-medium text-center '>{pera}</p>
          </div>
        </div>

      </Container>
    </>
  )
}

export default AboutCard
