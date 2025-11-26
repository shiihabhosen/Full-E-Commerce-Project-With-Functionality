import { countDownDateAndTime } from "countdown-date-time";
import { useState, useEffect } from "react";

const MusicTimer = () => {
  const conduct_date = "2027-11-01 20:00:00";
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
      <div className="flex gap-6">
        <div className="w-[62px] h-[62px] bg-white flex flex-col justify-center items-center rounded-full -space-y-1">
          <h4 className="text-[16px] font-semibold">{count.days}</h4>
          <p className="text-[11px] font-medium">Hours</p>
        </div>
        <div className="w-[62px] h-[62px] bg-white flex flex-col justify-center items-center rounded-full -space-y-1">
          <h4 className="text-[16px] font-semibold">{count.hours}</h4>
          <p className="text-[11px] font-medium">Days</p>
        </div>
        <div className="w-[62px] h-[62px] bg-white flex flex-col justify-center items-center rounded-full -space-y-1">
          <h4 className="text-[16px] font-semibold">{count.minutes}</h4>
          <p className="text-[11px] font-medium">Minutes</p>
        </div>
        <div className="w-[62px] h-[62px] bg-white flex flex-col justify-center items-center rounded-full -space-y-1">
          <h4 className="text-[16px] font-semibold">{count.seconds}</h4>
          <p className="text-[11px] font-medium">Seconds</p>
        </div>
      </div>
    </>
  );
};

export default MusicTimer;
