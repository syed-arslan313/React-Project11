import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LeftArrow from "../../assets/Larrow.svg";
import RightArrow from "../../assets/Rarroww.svg";
import News1 from "../../assets/N1.jpg";
import News2 from "../../assets/N2.jpg";
import News3 from "../../assets/N3.jpg";
import rightarrow from "../../assets/rarooww.svg";

function News() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col gap-[38px] mt-[66px]">
      {/* Header + Arrows */}
      <div className="flex flex-row justify-between items-center cont mx-auto">
        <h1 className="text-[48px] leading-[36px] text-[#98661C] display font-bold">
          What Our Partners Say
        </h1>

        <div className="flex flex-row gap-[20px] items-center">
          <img
            src={LeftArrow}
            alt="prev"
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={() => sliderRef.current.slickPrev()}
          />
          <img
            src={RightArrow}
            alt="next"
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        <div className="flex flex-col px-[10px]">
          <img
            src={News1}
            alt="image1"
            className="w-full cover h-[254px] bg-cover rounded-t-[10px] "
          ></img>
          <div className="flex flex-col gap-[12px] p-[24px] ">
            <h1 className="text-[21px] text-[#0F3B4A] neu font-medium">
              Phoenix Towers , Germany
            </h1>
            <p className="text-[14px] neu text-[#0F3B4A99]">
              Deployment of off-grid telecom masts for improved rural
              connectivity
            </p>
            <button class="flex flex-row gap-[8px] items-center  mt-auto">
              <p class="inter text-[15px] text-[#0F3B4A] ">Learn more</p>
              <img alt="right arrow" class="w-[10px]" src={rightarrow}></img>
            </button>
          </div>
        </div>

        <div className="flex flex-col px-[10px]">
          <img
            src={News2}
            alt="image1"
            className="w-full cover h-[254px] bg-cover rounded-t-[10px]"
          ></img>
          <div className="flex flex-col gap-[12px] p-[24px] ">
            <h1 className="text-[21px] text-[#0F3B4A] neu font-medium">
              Phoenix Towers , Germany
            </h1>
            <p className="text-[14px] neu text-[#0F3B4A99]">
              Deployment of off-grid telecom masts for improved rural
              connectivity
            </p>
            <button class="flex flex-row gap-[8px] items-center  mt-auto">
              <p class="inter text-[15px] text-[#0F3B4A] ">Learn more</p>
              <img alt="right arrow" class="w-[10px]" src={rightarrow}></img>
            </button>
          </div>
        </div>

        <div className="flex flex-col px-[10px]">
          <img
            src={News3}
            alt="image1"
            className="w-full cover h-[254px]  bg-cover rounded-t-[10px] "
          ></img>
          <div className="flex flex-col gap-[12px] p-[24px] ">
            <h1 className="text-[21px] text-[#0F3B4A] neu font-medium">
              Phoenix Towers , Germany
            </h1>
            <p className="text-[14px] neu text-[#0F3B4A99]">
              Deployment of off-grid telecom masts for improved rural
              connectivity
            </p>
            <button class="flex flex-row gap-[8px] items-center  mt-auto">
              <p class="inter text-[15px] text-[#0F3B4A] ">Learn more</p>
              <img alt="right arrow" class="w-[10px]" src={rightarrow}></img>
            </button>
          </div>
        </div>

        <div className="flex flex-col px-[10px]">
          <img
            src={News1}
            alt="image1"
            className="w-full cover h-[254px] rounded-t-[10px]"
          ></img>
          <div className="flex flex-col gap-[12px] p-[24px] ">
            <h1 className="text-[21px] text-[#0F3B4A] neu font-medium">
              Phoenix Towers , Germany
            </h1>
            <p className="text-[14px] neu text-[#0F3B4A99]">
              Deployment of off-grid telecom masts for improved rural
              connectivity
            </p>
            <button class="flex flex-row gap-[8px] items-center  mt-auto">
              <p class="inter text-[15px] text-[#0F3B4A] ">Learn more</p>
              <img alt="right arrow" class="w-[10px]" src={rightarrow}></img>
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default News;
