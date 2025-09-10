import React from "react";
import light from "../../assets/light.svg";
import inn from "../../assets/inn.svg";
import line from "../../assets/line.svg";

function In() {
  return (
    <div className="bg-[#fbebd6] md:mt-[77px] mt-[63px] md:pt-0 pt-[45px] md:px-0  px-[5px] ">
      <div className="cont mx-auto flex md:flex-row flex-col md:gap-[68px] gap-[51px] items-center md:items-start ">
        <div className="flex flex-col md:w-[49.13%] w-full gap-[36px] justify-center order-2 md:order-1 ">
          <div className="flex flex-row px-[21px] py-[26px] gap-[16px] rounded-[10px] bg-white">
            <img src={light} className="w-[56px] h-[55px]"></img>
            <div className="flex flex-col gap-[8px]">
              <h1 className="inter bold text-[15px] text-[#111827]">
                Innovation
              </h1>
              <p className="inter text-[14px] text-[#4B5563]">
                Pioneering solutions that address current and future challenges.
              </p>
            </div>
          </div>
          <div className="flex flex-row px-[21px] py-[26px] gap-[16px] rounded-[10px] bg-white border-[2px] border-white">
            <img src={light} className="w-[56px] h-[55px]"></img>
            <div className="flex flex-col gap-[8px]">
              <h1 className="inter bold text-[15px] text-[#111827]">
                Integrity{" "}
              </h1>
              <p className="inter text-[14px] text-[#4B5563]">
                Ethical business practices as the foundation of all our
                operations.
              </p>
            </div>
          </div>
          <div className="flex flex-row px-[21px] py-[26px] gap-[16px] rounded-[10px] bg-white">
            <img src={light} className="w-[56px] h-[55px]"></img>
            <div className="flex flex-col gap-[8px]">
              <h1 className="inter bold text-[15px] text-[#111827]">Impact</h1>
              <p className="inter text-[14px] text-[#4B5563]">
                Creating meaningful change in industries and communities.
              </p>
            </div>
          </div>
        </div>

        <img
          src={inn}
          alt="image"
          className="md:w-[45.21%] md:h-[582px] h-[309px] order-1 md:order-2 "
        ></img>
      </div>
      <img src={line} className="w-full h-[5px] mt-[67px] "></img>
    </div>
  );
}

export default In;
