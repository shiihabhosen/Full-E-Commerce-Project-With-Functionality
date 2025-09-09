import React, { useEffect, useState } from "react";
import Container from '../Component/Container';
import BreadCrumb from '../Component/BreadCrumb';
import Skeleton from "../Component/Skeliton";
import Paginate from "../Component/Paginate";
import { filterReducer } from "../Slice/ProductSlice";
import { useDispatch } from 'react-redux';

const ShopCategoryCard = () => {
  const [allproduct, setAllproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState(6);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  async function GetProduct() {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      setAllproduct(data.products || []);
      // প্রথমে সব products redux এ পাঠানো হচ্ছে
      dispatch(filterReducer(data.products || []));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    GetProduct();
  }, []);

  useEffect(() => {
    const uniqueCategories = [...new Set(allproduct.map((item) => item.category))];
    setCategories(uniqueCategories);
  }, [allproduct]);

  const handFilter = (item) => {
    const filteredProducts = allproduct.filter((cItem) => cItem.category === item);
    dispatch(filterReducer(filteredProducts));
  };
  const handleProduct = () => {
    dispatch(filterReducer(allproduct));
    localStorage.setItem("cart", JSON.stringify(allproduct))
  }

  return (
    <Container>
      <BreadCrumb />
      <div className='mt-[50px] flex justify-between'>

        {/* Sidebar */}
        <div className='w-[184px]'>
          <h5 className='text-[20px] font-bold py-4'>Shop by Category</h5>
          <ul className='text-[16px] font-medium space-y-4'>
            <li onClick={handleProduct} className='hover:text-[#FF0000] select-none capitalize cursor-pointer'>AllProducts</li>
            {categories.map((item, id) => (
              <li
                key={id}
                className='hover:text-[#FF0000] select-none capitalize cursor-pointer'
                onClick={() => handFilter(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div>
            <h3 className='text-[20px] font-bold mb-[15px] mt-10'>Shop by Color</h3>
            <ul className='flex flex-col gap-y-4 mb-10'>
              <div className='flex items-center gap-2'>
                <div className='w-[11px] h-[11px] rounded-full bg-black hover:border-2 border-white'></div>
                <li><a href="">Color 1</a></li>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-[11px] h-[11px] rounded-full bg-[#FF0000] hover:border-2 border-black'></div>
                <li><a href="">Color 2</a></li>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-[11px] h-[11px] rounded-full bg-[#00FF38] hover:border-2 border-black'></div>
                <li><a href="">Color 3</a></li>
              </div>
            </ul>
          </div>

        </div>

        {/* Products Section */}
        <div className='w-[854px]'>
          <div className='flex justify-end items-center gap-2'>
            <p>Show : </p>
            <select
              className='py-1 px-5 border-2 border-[#d9d9d9] rounded-[5px] focus:outline-none'
              onChange={(e) => setSelect(Number(e.target.value))}
              value={select}
            >
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>

          <div className='grid grid-cols-3 gap-[30px] mt-10'>
            {loading ? (
              Array.from({ length: select }).map((_, index) => (
                <Skeleton key={index} />
              ))
            ) : (
              <Paginate itemsPerPage={select} />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShopCategoryCard;
