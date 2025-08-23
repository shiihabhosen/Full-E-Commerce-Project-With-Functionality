import React from 'react'

const NewText = ({ className, headding, pera }) => {
    return (
        <>
            <div className={`${className}w-[242px] h-[122px] absolute  transform -translate-y-[160px] translate-x-[32px] text-white`}>
                <h2 className='text-[24px] font-semibold'>{headding}</h2>
                <p className='text-[14px]  w-[250px] font-normal py-4'>{pera}</p>
                <button className='text-[16px] border-b-2'>Shop Now</button>
            </div>
        </>
    )
}

export default NewText
