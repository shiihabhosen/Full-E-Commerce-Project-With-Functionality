import React from 'react';

const AllSectionHeadding = ({
  highlighttext,
  CategoryText,
  Days,
  Hours,
  Minutes,
  Seconds,

}) => {
  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
          <p className="text-[#DB4444]">{highlighttext}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="lg:text-[36px] md:text-[15px] font-semibold">{CategoryText}</h2>
            <div className="pl-[87px]">
              <ul className="flex lg:gap-[38px] gap-[15px] text-[12px] lg:font-medium">
                <li>{Days}</li>
                <li>{Hours}</li>
                <li>{Minutes}</li>
                <li>{Seconds}</li>
              </ul>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSectionHeadding;
