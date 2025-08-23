import React from 'react'


const CategoryCard = ({ img, text }) => {
  return (
    <>

      <div className='w-[170px] h-[145px] mt-[70px] border-2 flex flex-col space-y-4 hover:bg-[#DB4444] transition duration-200 border-[#b3b3b3] rounded-[4px]  justify-center items-center text-center '><img src={img} alt="" />
        <h5 className=''>{text}</h5>
      </div>

    </>
  )
}

export default CategoryCard
