import React from 'react'
import CategoryCard from './CategoryCard'
import phone from '../assets/phone.png'
import computer from '../assets/computer.png'
import wacth from '../assets/wacth.png'
import headphone from '../assets/headphone.png'
import game from '../assets/game.png'
import AllSectionHeadding from './AllSectionHeadding'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Slider from 'react-slick'



function SampleNextArrow({ onClick }) {
    return (
        <div
            className="absolute right-[10px] top-[-30%] transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#DB4444] transition-colors duration-200">
                <FaArrowRight className="text-black hover:text-white" />
            </div>
        </div>
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <div
            className="absolute right-[80px] top-[-30%] transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#DB4444] transition-colors duration-200">
                <FaArrowLeft className="text-black hover:text-white" />
            </div>
        </div>
    );
}



const Category = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <>
            <Container>
                <div className='mt-[60px]'>
                    <div className='w-full h-[460px] border-y-2 py-[80px] border-[#b3b3b3]'>
                        <AllSectionHeadding highlighttext='Categories' CategoryText='Browse By Category' />
                        <div className=' '>
                            <Slider {...settings}>
                                <CategoryCard img={phone} text='Phones' />
                                <CategoryCard img={computer} text='Computers' />
                                <CategoryCard img={wacth} text='SmartWatch' />
                                <CategoryCard img={phone} text='Camera' />
                                <CategoryCard img={headphone} text='HeadPhones' />
                                <CategoryCard img={game} text='Phones' />
                            </Slider>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Category
