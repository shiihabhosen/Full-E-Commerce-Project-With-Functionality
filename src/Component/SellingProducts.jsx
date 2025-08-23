import React from 'react'
import Container from './Container'
import AllSectionHeadding from './AllSectionHeadding'
import ProductCard from './ProductCard'
import tshirt from '../assets/tshirt.png'
import bag from '../assets/bag.png'
import light from '../assets/light.png'
import rack from '../assets/rack.png'
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



const SellingProducts = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <>
            <Container>
                <div className='mt-[70px]'>
                    <AllSectionHeadding highlighttext='This Month' CategoryText='Best Selling Products' />
                    <div className=' pt-[60px]'>
                        <Slider {...settings}>
                            <ProductCard img={tshirt} discounttext='-40%' productName='The north coat' price='$260' oldprice='$360' reviwretting='(65)' />
                            <ProductCard img={bag} discounttext='-40%' productName='Gucci duffle bag' price='$960' oldprice='$1160' reviwretting='(65)' />
                            <ProductCard img={light} discounttext='-40%' productName='RGB liquid CPU Cooler' price='$160' oldprice='$170' reviwretting='(65)' />
                            <ProductCard img={rack} discounttext='-40%' productName='Small BookSelf' price='$$360' reviwretting='(65)' />
                        </Slider>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SellingProducts
