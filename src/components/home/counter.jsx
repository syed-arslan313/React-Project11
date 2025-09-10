import React from "react";
import Eaarth from "../../assets/earth.png";

function Count() {
  return (
    <div className=" md:mt-[57px] mt-[34px] flex flex-col  md:grid md:grid-cols-6 md:gap-0 gap-[50px]  cont mx-auto  ">
      <div className="flex flex-row gap-[24px] md:col-span-2 pl-[10%] md:pl-0">
        <img src={Eaarth} alt="icon" className="w-[50px] h-[50px]"></img>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="inter text-[48px] leading-[37px] text-[#413D45] font-bold">12+</h1>
          <p className="inter font-medium text-[20px] text-black  ">Countries of operation</p>
        </div>
      </div>

        <div className="flex flex-row gap-[24px] md:justify-center md:col-span-2 pl-[10%] md:pl-0">
        <img src={Eaarth} alt="icon" className="w-[50px] h-[50px]"></img>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="inter text-[48px] leading-[37px] text-[#413D45] font-bold">54+</h1>
          <p className="inter font-medium text-[20px] text-black  ">Major projects</p>
        </div>
      </div>


        <div className="flex flex-row gap-[24px] md:justify-end md:col-span-2 pl-[10%] md:pl-0">
        <img src={Eaarth} alt="icon" className="w-[50px] h-[50px]"></img>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="inter text-[48px] leading-[37px] text-[#413D45] font-bold">100%</h1>
          <p className="inter font-medium text-[20px] text-black  ">Projects aligned with the SDGs (Sustainable Development Goals)</p>
        </div>
      </div>


        <div className="flex flex-row gap-[24px] md:col-span-3 md:justify-end md:mr-[56px] md:mt-[68px] pl-[10%] md:pl-0">
        <img src={Eaarth} alt="icon" className="w-[50px] h-[50px]"></img>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="inter text-[48px] leading-[37px] text-[#413D45] font-bold">140+</h1>
          <p className="inter font-medium text-[20px] text-black w-[270px] ">Team members</p>
        </div>
      </div>

        <div className="flex flex-row  gap-[24px] md:col-span-3 md:mt-[68px] pl-[10%] md:pl-0">
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
