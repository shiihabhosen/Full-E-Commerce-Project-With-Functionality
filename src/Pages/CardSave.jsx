import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { deleterReducer } from "../Slice/ProductSlice";

const CardSave = ({ item, id }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const dispatch = useDispatch();
  const deleteClick = () => {
    dispatch(deleterReducer(id));
    console.log("i am working");
  };

  return (
    <>
      <div className="h-[102px] bg-white shadow-md px-8 mt-6 mb-6">
        <div className="grid grid-cols-4 items-center h-full">
          <div className="flex items-center gap-4 relative group">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-[54px] h-[54px]"
            />
            <h3 className="font-medium">{item.title.slice(0, 12)}...</h3>

            <TiDelete
              onClick={deleteClick}
              className="text-2xl text-red-500 hover:text-red-600 cursor-pointer absolute -top-2 -left-4 hidden group-hover:block"
            />
          </div>

          <p className="text-center font-medium">${item.price}</p>

          <div className="flex justify-center">
            <select
              className="border border-gray-300 rounded-md px-3 py-1 w-20 text-center"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <h3 className="text-right font-medium">
            Total: ${(item.price * quantity).toFixed(2)}
          </h3>
        </div>
        <div>dhhe </div>
      </div>
    </>
  );
};

export default CardSave;
