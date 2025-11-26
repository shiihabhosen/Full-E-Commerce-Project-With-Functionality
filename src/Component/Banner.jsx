import React from "react";
import Container from "./Container";
import { MdOutlineNavigateNext } from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../assets/baner1.jpg";
import Iphone from "./Iphone";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "20px", right: "8%" }}>
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-red-200 rounded-full mx-1 transition-colors duration-300"></div>
    ),
  };

  return (
    <>
      <Container>
        <div className=" lg:flex md:flex-none  md:items-center  lg:justify-between overflow-hidden">
          {/* Sidebar menu */}
          <div className="w-[217px] lg:border-r-2 lg:h-[344px] h-[150px] text-[16px] grid mx-auto overflow-y-auto overflow-x-hidden lg:overflow-visible font-medium lg:max-h-none lg:space-y-4 space-y-2">
            <ul className="flex items-center lg:justify-between gap-10 mt-[58px] w-[217px]">
              <li>
                {" "}
                <a href="">Woman’s Fashion</a>
              </li>
              <MdOutlineNavigateNext className="text-2xl" />
            </ul>
            <ul className="flex items-center lg:justify-between gap-[65px] w-[217px]">
              <li>
                {" "}
                <a href="">Men’s Fashion</a>
              </li>
              <MdOutlineNavigateNext className="text-2xl" />
            </ul>
            <ul className="space-y-4 w-[217px]">
              <li>
                <a href="">Electronics</a>
              </li>
              <li>
                <a href="">Home & Lifestyle</a>
              </li>
              <li>
                <a href="">Medicine</a>
              </li>
              <li>
                <a href="">Sports & Outdoor</a>
              </li>
              <li>
                <a href="">Baby’s & Toys</a>
              </li>
              <li>
                <a href="">Groceries & </a>
              </li>
              <li>
                <a href="">Health & Beauty</a>
              </li>
            </ul>
          </div>

          {/* Banner slider */}
          <div className="w-full mt-[58px]">
            <Slider {...settings}>
              <Iphone />
              <Iphone />
              <Iphone />
              <Iphone />
              <Iphone />
            </Slider>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
