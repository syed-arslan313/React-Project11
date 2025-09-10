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
    responsive: [
      {
        breakpoint: 768, // 768px se neeche
        settings: {
          slidesToShow: 1, // sirf 1 slide
          slidesToScroll: 1,
          centerMode: false, // center mode off for mobile
          centerPadding: "0", // padding 0
        },
      },
    ],
  };

  return (
    <div className="partners-slider relative w-[100%] mx-auto mt-[97px] md:mt-[124px] md:gap-[68px] gap-[51px] flex flex-col ">
      <div className="flex flex-row justify-center md:justify-between items-center cont mx-auto">
        <h1 className="md:text-[48px] text-center md:text-start text-[40px] md:leading-[36px] text-[#98661C] display font-bold">
          What Our Partners Say
        </h1>

        <div className="md:flex hidden flex-row gap-[20px] items-center">
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
      <Slider ref={sliderRef} {...settings} className=" md:px-0  px-[20px]">
        <div className="px-[10px] ">
          <div className=" flex flex-col  rounded-[10px] py-[37px] px-[28px] items-start ">
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
          <div className=" flex flex-col  rounded-[10px] py-[37px] px-[28px] items-start ">
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
          <div className=" flex flex-col  rounded-[10px] py-[37px] px-[28px] items-start ">
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
          <div className=" flex flex-col  rounded-[10px] py-[37px] px-[28px] items-start ">
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
          <div className=" flex flex-col rounded-[10px]  py-[37px] px-[28px] items-start">
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
          <div className=" flex flex-col rounded-[10px]  py-[37px] px-[28px] items-start ">
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

      <div className="md:hidden flex flex-row gap-[20px] justify-center items-center">
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
  );
}

export default SimpleSlider;
