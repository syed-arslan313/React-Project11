import React from "react";
import Eaarth from "../../assets/earth.png";

function Count() {
  return (
    <div className=" mt-[57px] grid grid-cols-6  items-center cont mx-auto  ">
      <div className="flex flex-row gap-[24px] col-span-2">
        <img src={Eaarth} alt="icon" className="w-[50px] h-[50px]"></img>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="inter text-[48px] leading-[37px] text-[#413D45] font-bold">12+</h1>
          <p className="inter font-medium text-[20px] text-black  ">Countries of operation</p>
        </div>
      </div>

        <div className="flex flex-row gap-[24px] justify-center col-span-2">
        <img src={Eaarth} alt="icon" className="w-[50px] h-[50px]"></img>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="inter text-[48px] leading-[37px] text-[#413D45] font-bold">54+</h1>
          <p className="inter font-medium text-[20px] text-black  ">Major projects</p>
        </div>
      </div>


        <div className="flex flex-row gap-[24px] justify-end col-span-2">
        <img src={Eaarth} alt="icon" className="w-[50px] h-[50px]"></img>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="inter text-[48px] leading-[37px] text-[#413D45] font-bold">100%</h1>
          <p className="inter font-medium text-[20px] text-black  ">Projects aligned with the SDGs (Sustainable Development Goals)</p>
        </div>
      </div>


        <div className="flex flex-row gap-[24px] col-span-3 justify-end mr-[56px] mt-[68px]">
        <img src={Eaarth} alt="icon" className="w-[50px] h-[50px]"></img>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="inter text-[48px] leading-[37px] text-[#413D45] font-bold">140+</h1>
          <p className="inter font-medium text-[20px] text-black w-[270px] ">Team members</p>
        </div>
      </div>

        <div className="flex flex-row  gap-[24px] col-span-3 mt-[68px]">
        <img src={Eaarth} alt="icon" className="w-[50px] h-[50px]"></img>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="inter text-[48px] leading-[37px] text-[#413D45] font-bold">600000+</h1>
          <p className="inter font-medium text-[20px] text-black  ">Lives impacted</p>
        </div>
      </div>
    </div>
  );
}

export default Count;
