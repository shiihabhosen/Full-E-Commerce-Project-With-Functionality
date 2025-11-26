import React, { useEffect, useState } from "react";
import Container from "./Container";
import AllSectionHeadding from "./AllSectionHeadding";
import ProductCard from "./ProductCard";
import tshirt from "../assets/tshirt.png";
import bag from "../assets/bag.png";
import light from "../assets/light.png";
import rack from "../assets/rack.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import PropsCard from "./PropsCard";

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
    prevArrow: <SamplePrevArrow />,
  };

  const [smartphone, setSmartphone] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => setSmartphone(data.products));
  }, []);

  return (
    <>
      <Container>
        <div className="mt-[70px]">
          <AllSectionHeadding
            highlighttext="This Month"
            CategoryText="Best Selling Products"
          />
          <div className=" pt-[60px]">
            <Slider {...settings}>
              {smartphone.map((item) => {
                return (
                  <div className="">
                    <PropsCard
                      key={item.id}
                      items={item}
                      id={item.id}
                      productDetails={item}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SellingProducts;
