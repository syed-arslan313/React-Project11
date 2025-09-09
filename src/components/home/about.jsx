import React from "react";
import Aboutimg from "../../assets/abouttt.svg";
import Absolute from "../../assets/abso.svg";

function About() {
  return (
    <div className="cont flex flex-row gap-[75px] mx-auto mt-[23px] relative overflow-hidden">
      <img src={Aboutimg} alt="about image" className="w-[50%} h-[482px]" />
      <div className="w-[50%] flex flex-col justify-center items-start">
        <h1 className="inter font-medium leading-[55px] text-[20px] text-[#B48B36]">
          About{" "}
        </h1>

        <h1 className="text-[48px]  leading-[55px] text-[#98661C] display font-bold ">
          Golby Diop Holding
        </h1>
        <p className="inter text-[18px] leading-[28px] text-black w-[90%] pt-[49px]">
          Founded with a vision to create sustainable impact across multiple
          industries, Golby Diop Holding has grown into a diversified group with
          a strong presence in six key sectors.
        </p>
        <p className="inter text-[18px] leading-[28px] text-black w-[75%] pt-[25px]">
          Our commitment to innovation, quality, and social responsibility
          drives everything we do, from product development to community
          engagement.
        </p>

        <button className="border bg-black px-[24px] py-[12px] rounded-[54px] cursor-pointer mt-[35px]">
          <p className="neu text-[14px] text-white ">Learn More</p>
        </button>
      </div>

      <img
        src={Absolute}
        alt="absolute image"
        className="absolute w-[687px] h-[785px] right-[-425px] bottom-[-150px]"
      />
    </div>
  );
}

export default About;
