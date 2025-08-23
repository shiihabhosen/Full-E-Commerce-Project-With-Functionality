import React from 'react';
import ProductCard from './ProductCard';
import Gamepad from '../assets/Gamepad.png';
import Keyboard from '../assets/Keyboard.png';
import Monitor from '../assets/Monitor.png';
import Chair from '../assets/Chair.png';
import Container from './Container';
import AllSectionHeadding from './AllSectionHeadding'; // ✅ fixed import
import Slider from "react-slick";
import Button from './Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { NavLink } from 'react-router';
import Timer from './Timer';
import PropsCard from './PropsCard';

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
            className="absolute right-[80px] top-[-30%]  transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#DB4444] transition-colors duration-200">
                <FaArrowLeft className="text-black hover:text-white" />
            </div>
        </div>
    );
}

const FlashSalesProduct = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container>
            <div className="mt-[173px]">
                <AllSectionHeadding
                    highlighttext="Today’s"
                    CategoryText="Flash Sales"
                   Days='Days'Hours='Hours'Minutes='Minutes'Seconds='Seconds'
                    one='03'tow=':'three='23'
                   
                />
                <Timer/>
                <div>
                </div>
                <div className="pt-[50px] w-full ">
                    <Slider {...settings}>
                        <PropsCard
                            img={Gamepad}
                            discounttext="-40%"
                            productName="HAVIT HV-G92 Gamepad"
                            price="$120"
                            oldprice="$160"
                            reviwretting="(88)"
                        />
                        <PropsCard
                            img={Keyboard}
                            discounttext="-40%"
                            productName="HAVIT HV-KB395L Keyboard"
                            price="$120"
                            oldprice="$160"
                            reviwretting="(88)"
                        />
                        <PropsCard
                            img={Monitor}
                            discounttext="-40%"
                            productName="Acer Nitro Monitor"
                            price="$120"
                            oldprice="$160"
                            reviwretting="(88)"
                        />
                        <PropsCard
                            img={Chair}
                            discounttext="-40%"
                            productName="Ergonomic Gaming Chair"
                            price="$120"
                            oldprice="$160"
                            reviwretting="(88)"
                        />
                    </Slider>
                </div>
                <div className="text-center">
                   <NavLink to='/shop'> <Button btntext="View All Products" className="text-white mt-[20px]" /></NavLink>
                </div>
            </div>
        </Container>
    );
};

export default FlashSalesProduct;
