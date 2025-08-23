import React from 'react'

const Button = ({className,btntext}) => {
  return (
    <>
      <div className={`${className} px-12 py-4  bg-[#DB4444]  rounded-[4px]  cursor-pointer inline-block text-black`}>{btntext}
      </div>
    </>
  )
}

export default Button
