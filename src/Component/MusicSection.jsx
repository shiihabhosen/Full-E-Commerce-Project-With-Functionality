import React from 'react'
import Container from './Container'
import musicimg from '../assets/music.png'
import MusicTimer from './MusicTimer'
import Button from './Button'

const MusicSection = () => {
    return (
        <>
            <Container>
                <div className="h-[500px] mt-[140px] bg-black flex justify-between items-center px-20">
                    {/* Text Part */}
                    <div >
                        <p className="text-green-500 mb-2">Categories</p>
                        <h2 className="text-white text-5xl font-semibold leading-tight py-8">
                            Enhance Your <br /> Music Experience
                        </h2>
                        <div className='flex gap-6'>
                            < MusicTimer time='23' day='Hours' />
                            < MusicTimer time='05' day='Days' />
                            < MusicTimer time='59' day='Minutes' />
                            < MusicTimer time='35' day='Seconds' />
                        </div>
                        <Button className='!bg-[#00FF66] mt-[40px] w-[171px] text-white' btntext='Buy Now!' />
                    </div>

                    {/* Speaker Glow Box */}
                    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                        {/* Radial Glow Background */}
                        <div className="absolute w-[500px] bg-gray-200 h-[500px] rounded-full bg-[radial-gradient(circle,rgba(100,100,100,0.2)_0%,rgba(0,0,0,1)_80%)] z-0"></div>

                        {/* Speaker Image */}
                        <img src={musicimg} alt="music" className="relative z-10 w-[400px]" />
                    </div>
                </div>


            </Container>
        </>
    )
}

export default MusicSection
