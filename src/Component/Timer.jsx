
import { countDownDateAndTime } from 'countdown-date-time';
import { useState, useEffect } from 'react';




const Timer = () => {
    const conduct_date = '2026-01-01 24:00:00';
    const [count, setCount] = useState({})

    useEffect(() => {
        const interval = setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setCount(countDown);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <ul className="flex lg:text-[32px] md:text-[15px] font-bold gap-x-[14px] ml-[260px]">
                <li>{
                    count.days
                }</li>
                <li className="text-[#E07575]">:</li>
                <li>
                    {
                        count.hours
                    }
                </li>
                <li className="text-[#E07575]">:</li>
                <li>
                    {
                        count.minutes
                    }
                </li>
                <li className="text-[#E07575]">:</li>
                <li>
                    {
                        count.seconds
                    }
                </li>
            </ul>
            {/* <div className='flex gap-4'>
                <div>
                    <h3 className='text-[12px]'>Days</h3>
                    <div className='flex gap-[17px] items-center'>
                        <h4 className='text-[32px] font-bold'>{count.days}</h4>
                        <span className='text-[#E07575] text-[34px]'>:</span>
                    </div>
                </div>

                <div>
                    <h3 className='text-[12px]'>Hours</h3>
                    <div className='flex gap-[17px] items-center'>
                        <h4 className='text-[32px] font-bold'>{count.hours}</h4>
                        <span className='text-[#E07575] text-[34px]'>:</span>
                    </div>
                </div>

                <div>
                    <h3 className='text-[12px]'>Minutes</h3>
                    <div className='flex gap-[17px] items-center'>
                        <h4 className='text-[32px] font-bold'>{count.minutes}</h4>
                        <span className='text-[#E07575] text-[34px]'>:</span>
                    </div>
                </div>

                <div>
                    <h3 className='text-[12px]'>Seconds</h3>
                    <div className='flex gap-[17px] items-center'>
                        <h4 className='text-[32px] font-bold'>{count.seconds}</h4>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Timer
