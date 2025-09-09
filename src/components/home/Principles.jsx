import React from "react";
import light from "../../assets/light.svg";
import inn from "../../assets/inn.svg";
import line from "../../assets/line.svg";

function In() {
  return (
    <div className="bg-[#fbebd6] mt-[77px] ">
      <div className="cont mx-auto flex flex-row gap-[68px] ">
        <div className="flex flex-col w-[49.13%] gap-[36px] justify-center ">
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

        <img src={inn} alt="image" className="w-[45.21%] h-[582px]"></img>
      </div>
      <img src={line} className="w-full h-[5px]"></img>
    </div>
  );
}

export default In;
