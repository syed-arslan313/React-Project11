import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/Larrow.svg";
import RightArrow from "../../assets/Rarroww.svg";
import Comma from "../../assets/comma.svg";

function SimpleSlider() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10%",
  };

  return (
    <div className="partners-slider relative w-[100%] mx-auto mt-[124px] gap-[68px] flex flex-col">
      <div className="flex flex-row justify-between items-center cont mx-auto">
        <h1 className="text-[48px] leading-[36px] text-[#98661C] display font-bold">
          What Our Partners Say
        </h1>

        <div className="flex flex-row gap-[20px] items-center">
          <img
            src={LeftArrow}
            alt="prev"
            className="w-[11px] h-[19px] cursor-pointer"
            onClick={() => sliderRef.current.slickPrev()}
          />
          <img
            src={RightArrow}
            alt="next"
            className="w-[11px] h-[19px] cursor-pointer"
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        <div className="px-[10px] ">
          <div className=" flex flex-col  rounded-[10px] py-[37px] px-[28px] ">
            <img src={Comma} alt="comma" className="w-[67px] h-[46px]" />
            <p className="inter text-[21px] leading-[29px] text-black pb-[30px] pt-[20px]">
              Golby Diop Holding has been a trusted partner for over 5 years.
              Together, we’ve deployed sustainable solutions in three West
              African countries.
            </p>
            <p className="text-[12px] inter leading-[16px] text-black pb-[22px]">
              Fatoumata Ndiaye, Regional Director, Nutricia
            </p>
          </div>
        </div>

        {/* same slides copy */}
        <div className="px-[10px]">
          <div className=" flex flex-col  rounded-[10px] py-[37px] px-[28px] ">
            <img src={Comma} alt="comma" className="w-[67px] h-[46px]" />
            <p className="inter text-[21px] leading-[29px] text-black pb-[30px] pt-[20px]">
              Golby Diop Holding has been a trusted partner for over 5 years.
              Together, we’ve deployed sustainable solutions in three West
              African countries.
            </p>
            <p className="text-[12px] inter leading-[16px] text-black pb-[22px]">
              Fatoumata Ndiaye, Regional Director, Nutricia
            </p>
          </div>
        </div>

        <div className="px-[10px]">
          <div className=" flex flex-col  rounded-[10px] py-[37px] px-[28px] ">
            <img src={Comma} alt="comma" className="w-[67px] h-[46px]" />
            <p className="inter text-[21px] leading-[29px] text-black pb-[30px] pt-[20px]">
              Golby Diop Holding has been a trusted partner for over 5 years.
              Together, we’ve deployed sustainable solutions in three West
              African countries.
            </p>
            <p className="text-[12px] inter leading-[16px] text-black pb-[22px]">
              Fatoumata Ndiaye, Regional Director, Nutricia
            </p>
          </div>
        </div>

        <div className="px-[10px]">
          <div className=" flex flex-col  rounded-[10px] py-[37px] px-[28px] ">
            <img src={Comma} alt="comma" className="w-[67px] h-[46px]" />
            <p className="inter text-[21px] leading-[29px] text-black pb-[30px] pt-[20px]">
              Golby Diop Holding has been a trusted partner for over 5 years.
              Together, we’ve deployed sustainable solutions in three West
              African countries.
            </p>
            <p className="text-[12px] inter leading-[16px] text-black pb-[22px]">
              Fatoumata Ndiaye, Regional Director, Nutricia
            </p>
          </div>
        </div>

        <div className="px-[10px]">
          <div className=" flex flex-col rounded-[10px]  py-[37px] px-[28px] ">
            <img src={Comma} alt="comma" className="w-[67px] h-[46px]" />
            <p className="inter text-[21px] leading-[29px] text-black pb-[30px] pt-[20px]">
              Golby Diop Holding has been a trusted partner for over 5 years.
              Together, we’ve deployed sustainable solutions in three West
              African countries.
            </p>
            <p className="text-[12px] inter leading-[16px] text-black pb-[22px]">
              Fatoumata Ndiaye, Regional Director, Nutricia
            </p>
          </div>
        </div>

        <div className="px-[10px]">
          <div className=" flex flex-col rounded-[10px]  py-[37px] px-[28px] ">
            <img src={Comma} alt="comma" className="w-[67px] h-[46px]" />
            <p className="inter text-[21px] leading-[29px] text-black pb-[30px] pt-[20px]">
              Golby Diop Holding has been a trusted partner for over 5 years.
              Together, we’ve deployed sustainable solutions in three West
              African countries.
            </p>
            <p className="text-[12px] inter leading-[16px] text-black pb-[22px]">
              Fatoumata Ndiaye, Regional Director, Nutricia
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
