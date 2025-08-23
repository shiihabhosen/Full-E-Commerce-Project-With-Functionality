import React from 'react'

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


const CardSave = ({img,itemname,price,pise,total}) => {
    return (
        <>
            <div className='w-full h-[102px] flex justify-around items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-[4px] mt-10'>
                <div className='flex items-center gap-5' >
                    <img src={img} alt="" className='w-[55px] h-[55px]' />
                    <p>{itemname}</p>
                </div>
                <p>{price}</p>
                <div className='w-[72px] h-[44px] border-1 border-gray-600 rounded-[4px] flex items-center py-[6px] px-[12px] gap-3 text-[18px]'>
                    <p>{pise}</p>
                    <div className=' '>
                        <div><MdKeyboardArrowUp /></div>
                        <div><MdKeyboardArrowDown /></div>
                    </div>
                </div>
                <p>{total}</p>
            </div>
        </>
    )
}

export default CardSave
