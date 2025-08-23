import React from 'react'

const MusicTimer = ({ time, day }) => {
  return (
    <>
      <div className='w-[62px] h-[62px] bg-white flex flex-col justify-center items-center rounded-full -space-y-1'>
        <h4 className='text-[16px] font-semibold'>{time}</h4>
        <p className='text-[11px] font-medium'>{day}</p>
      </div>
    </>
  )
}

export default MusicTimer
