import React from 'react'
import Container from './Container'
import AllSectionHeadding from './AllSectionHeadding'
import ProductCard from './ProductCard'
import coklate from '../assets/coklate.png'
import camera from '../assets/lens.png'
import laptop from '../assets/laptop.png'
import fesworsh from '../assets/fesworsh.png'
import Button from './Button'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Slider from 'react-slick'
import { NavLink } from 'react-router'

function SampleNextArrow({ onClick }) {
    return (
        <div
            className="absolute right-[10px] top-[-11%] transform -translate-y-1/2 z-10 cursor-pointer"
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
            className="absolute right-[80px] top-[-11%] transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#DB4444] transition-colors duration-200">
                <FaArrowLeft className="text-black hover:text-white" />
            </div>
        </div>
    );
}


const OurProducts = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <>
            <Container>
                <div className='mt-[71px] '>
                    <AllSectionHeadding highlighttext='Our Products' CategoryText='Explore Our Products' />
                    <div className='mt-[60px] gap-y-10'>
                        <Slider  {...settings}>
                            <ProductCard img={coklate} discounttext='-40%' productName='Breed Dry Dog Food' price='$100' reviwretting='(65)' />
                            <ProductCard img={camera} discounttext='-40%' productName='CANON EOS DSLR Camera' price='$360' reviwretting='(95)' />
                            <ProductCard img={laptop} discounttext='-40%' productName='ASUS FHD Gaming Laptop' price='$700' reviwretting='(325)' />
                            <ProductCard img={fesworsh} discounttext='-40%' productName='Curology Product Set ' price='$500' reviwretting='(45)' />
                            <ProductCard img={laptop} discounttext='-40%' productName='ASUS FHD Gaming Laptop' price='$700' reviwretting='(325)' />
                            <ProductCard img={fesworsh} discounttext='-40%' productName='Curology Product Set ' price='$500' reviwretting='(45)' />
                            <ProductCard img={coklate} discounttext='-40%' productName='Breed Dry Dog Food' price='$100' reviwretting='(65)' />
                            <ProductCard img={camera} discounttext='-40%' productName='CANON EOS DSLR Camera' price='$360' reviwretting='(95)' />
                        </Slider>
                    </div>

                    <div className='mt-[60px] text-center'>
                        <NavLink to='/wishlist'>
                            <Button btntext='View All Products' className='text-white' />
                        </NavLink>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OurProducts
