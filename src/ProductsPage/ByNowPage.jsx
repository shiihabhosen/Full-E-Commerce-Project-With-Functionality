import { useEffect, useState } from 'react';
import Container from '../Component/Container';
import byimg1 from '../assets/by1.png';
import byimg2 from '../assets/by2.png';
import byimg3 from '../assets/by3.png';
import byimg4 from '../assets/by4.png';
import byimgbig from '../assets/by5.png';
import retting from '../assets/retting.png';
import deleverybos from '../assets/deleverybos.png';
import returticon from '../assets/returticon.png';
import { AiOutlineMinus } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import Button from '../Component/Button';
import { IoIosHeartEmpty } from "react-icons/io";
import ProductCard from '../Component/ProductCard';
import Gamepad from '../assets/Gamepad.png';
import Keyboard from '../assets/Keyboard.png';
import Monitor from '../assets/Monitor.png';
import AllSectionHeadding from '../Component/AllSectionHeadding';
import BreadCrumb from '../Component/BreadCrumb';

const ByNowPage = () => {
    const [selectedColor, setSelectedColor] = useState('blue');

    const colors = [
        { name: 'blue', hex: '#93c5fd' },
        { name: 'red', hex: '#f28b82' }
    ];

    const [selectedSize, setSelectedSize] = useState('M');
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const [allproduct, setAllproduct] = useState([]);

    async function GetProduct() {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setAllproduct(data.products || []);

        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false);
        }
        console.log(allproduct)
    }
    useEffect(() => {
        GetProduct();
    }, []);

    return (
        <>
            <Container>
                <BreadCrumb />
                <div className='w-full h-[600px] flex items-center justify-between'>
                    <div className='w-[170px] h-full space-y-4'>
                        <div className='w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center'>
                            <img src={byimg1} alt="" className='cursor-pointer' />
                        </div>
                        <div className='w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center'>
                            <img src={byimg2} alt="" className='cursor-pointer' />
                        </div>
                        <div className='w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center'>
                            <img src={byimg3} alt="" className='cursor-pointer' />
                        </div>
                        <div className='w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center'>
                            <img src={byimg4} alt="" className='cursor-pointer' />
                        </div>
                    </div>

                    {/* main big image */}
                    <div className='w-[500px] h-full flex items-center justify-center bg-[#F5F5F5] rounded-[4px]'>
                        <img src={byimgbig} alt="" />
                    </div>

                    {/* product details */}
                    <div className='w-[400px] h-full'>
                        <h5 className='text-[24px] font-semibold'>Havic HV G-92 Gamepad</h5>
                        <div className='flex items-center gap-2'>
                            <img src={retting} alt="" />
                            <p className='text-gray-300'>(150 Reviews)</p>
                            <p className='border-l-2 text-[#00FF66] px-3'>In Stock</p>
                        </div>
                        <div className='border-b-2 border-[#808080]'>
                            <h4 className='text-[20px] font-medium mt-4'>$192.00</h4>
                            <p className='py-[26px]'>
                                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
                                for easy bubble free install & mess free removal Pressure sensitive.
                            </p>
                        </div>

                        {/* color select section */}
                        <div className="flex gap-6 py-4 items-center">
                            <h2 className="text-[20px] font-semibold">Colours:</h2>
                            <div className="flex gap-2">
                                {colors.map((color) => (
                                    <label key={color.name} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            checked={selectedColor === color.name}
                                            onChange={() => setSelectedColor(color.name)}
                                            className="sr-only"
                                        />
                                        <div
                                            className={`w-6 h-6 rounded-full border-3 ${selectedColor === color.name ? 'border-black' : 'border-transparent'
                                                }`}
                                            style={{ backgroundColor: color.hex }}
                                        ></div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* size section */}
                        <div className='w-[296px] h-10 flex items-center gap-6 mb-[20px]'>
                            <p className="text-[20px] font-semibold">Size:</p>
                            <div className='flex items-center justify-between space-x-4'>
                                {sizes.map((size) => (
                                    <div
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`flex items-center justify-center font-bold w-8 h-8 border-2 rounded-[4px] cursor-pointer${selectedSize === size
                                                ? '!bg-[#DB4444]'
                                                : 'bg-[#DB4444] text-black border-[#808080]'
                                            }`}
                                    >
                                        <h6 className="text-sm">{size}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* buy now and quantity */}
                        <div className='flex justify-between items-center'>
                            <div className='w-[160px] h-[44px] rounded-[4px] border-2 border-[#808080] flex'>
                                <div className='w-10 h-full flex items-center justify-center'>
                                    <AiOutlineMinus className='text-2xl cursor-pointer' />
                                </div>
                                <div className='text-2xl font-medium w-[80px] h-full flex items-center justify-center border-x-2 border-[#808080]'>
                                    2
                                </div>
                                <div className='w-10 h-full flex items-center justify-center'>
                                    <FiPlus className='text-2xl font-medium cursor-pointer' />
                                </div>
                            </div>
                            <Button btntext='Buy Now' className='py-[10px] px-[48px] text-white text-[16px]' />
                            <div className='w-10 h-10 flex justify-center items-center border-2 border-[#808080] rounded-[4px]'>
                                <IoIosHeartEmpty className='text-2xl font-medium cursor-pointer' />
                            </div>
                        </div>

                        {/* delivery section */}
                        <div className='w-full h-[180px] border-2 border-[#808080] rounded-[4px] mt-6'>
                            <div className='flex py-5 px-4 gap-4'>
                                <img src={deleverybos} alt="" />
                                <div className='space-y-2'>
                                    <p className='text-[16px] font-medium'>Free Delivery</p>
                                    <p className='text-[12px] font-medium underline'>
                                        Enter your postal code for Delivery Availability
                                    </p>
                                </div>
                            </div>
                            <div className='w-full h-0.5 bg-black'></div>
                            <div className='flex py-5 px-4 gap-4'>
                                <img src={returticon} alt="" />
                                <div className='space-y-2'>
                                    <p className='text-[16px] font-medium'>Return Delivery</p>
                                    <p className='text-[12px] font-medium'>
                                        Free 30 Days Delivery Returns. Details
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Item section */}
                <div className='mt-[134px]'>
                    <AllSectionHeadding highlighttext='Related Item ' />
                    <div className='flex justify-between'>
                        <ProductCard img={Gamepad} discounttext="-40%" productName="HAVIT HV-G92 Gamepad" price="$120" oldprice="$160" reviwretting="(88)" />
                        <ProductCard img={Keyboard} discounttext="-40%" productName="HAVIT HV-G92 Gamepad" price="$120" oldprice="$160" reviwretting="(88)" />
                        <ProductCard img={Monitor} discounttext="-40%" productName="HAVIT HV-G92 Gamepad" price="$120" oldprice="$160" reviwretting="(88)" />
                        <ProductCard img={Gamepad} discounttext="-40%" productName="HAVIT HV-G92 Gamepad" price="$120" oldprice="$160" reviwretting="(88)" />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ByNowPage;
