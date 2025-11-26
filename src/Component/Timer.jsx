import { countDownDateAndTime } from "countdown-date-time";
import { useState, useEffect } from "react";

const Timer = () => {
  const conduct_date = "2026-01-01 24:00:00";
  const [count, setCount] = useState({});

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
        <li>{count.days}</li>
        <li className="text-[#E07575]">:</li>
        <li>{count.hours}</li>
        <li className="text-[#E07575]">:</li>
        <li>{count.minutes}</li>
        <li className="text-[#E07575]">:</li>
        <li>{count.seconds}</li>
      </ul>
    </>
  );
};

export default Timer;
