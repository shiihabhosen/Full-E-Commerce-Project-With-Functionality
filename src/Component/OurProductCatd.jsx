import { Rate } from 'antd';
import { IoMdHeartEmpty } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocardReducer } from "../Slice/ProductSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";

const notify = () =>
  toast.success("Sucsessfully added you product!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });


  
  
  const OurProductCatd = ({laptop, className,id,productDetails }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
  
    // Guard: prevent rendering when items is undefined (avoids reading .thumbnail)
    if (!laptop) return null;
  
    const handleProductDetails = () => {
      if (!id) return;
      navigate(`/bynow/${id}`);
    };
  
    function addToCard() {
      dispatch(addtocardReducer(productDetails));
      notify();
    }
  return (
    
    <>
    <ToastContainer />
      <div
        className={`${className} group relative w-[270px] h-[360px] overflow-hidden cursor-pointer`}
      >
        <div className="w-full h-[270px] bg-white rounded-[4px] flex justify-center items-center">
          <img
              onClick={handleProductDetails}
            src={laptop.thumbnail}
          />
        </div>

        <div className="flex justify-between mx-3 -mt-[255px]">
            <div className="w-[55px] h-[26px] rounded-[4px] bg-[#DB4444] flex justify-center items-center text-white text-[12px]">{laptop.discountPercentage}%</div>
          <div className="space-y-2">
            <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-white text-2xl">
              <IoMdHeartEmpty />
            </div>
            <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-white text-2xl">
              <FiEye />
              
            </div>
          </div>
        </div>

        {/* ✅ Add to Cart button (initially hidden, shows on hover) */}
        <div className="absolute bottom-[80px] left-0 right-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-3">
          <button
              onClick={addToCard}
            className="w-full bg-black text-white py-2 rounded-[4px] font-medium text-sm cursor-pointer"
          >
            Add To Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-[190px] px-3">
          <h4 className="text-[16px] font-medium">{laptop.title}</h4>
          <div className="flex gap-2 py-0.5">
            <h4 className="text-[#DB4444] text-[16px] font-medium">
              ${laptop.price}
            </h4>

            <h4 className="text-[#808080] text-[16px] font-medium line-through">
           
              <span>$</span>
              {Math.floor(laptop.price / (1- laptop.discountPercentage /100))}
            </h4>
          </div>
          <div className="flex text-[#FFAD33] gap-0.5 items-center">
            <div className="flex gap-2">
              
              <Rate  className="!text-[#FFAD33]" disabled defaultValue={laptop.rating} />;
            </div>
            <span className="text-[#808080] pl-3">{laptop.reviews[0].rating}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProductCatd;
