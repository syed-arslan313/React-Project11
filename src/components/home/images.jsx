import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import im1 from "../../assets/i1.png";
import im2 from "../../assets/i2.png";
import im3 from "../../assets/i3.png";
import im4 from "../../assets/i4.png";
import im5 from "../../assets/i5.png";
import im6 from "../../assets/i6.png";

function Images() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // desktop default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // large laptop
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="cont mx-auto mt-[61px] md:mt-[115px]">
      <Slider {...settings} className="flex flex-row gap-[48px]">
        <img src={im1} alt="image 1" className="w-[15.49%] h-[74px]" />
        <img src={im2} alt="image 2" className="w-[16.99%] h-[50px]" />
        <img src={im3} alt="image 3" className="w-[12.82%] h-[51px]" />
        <img src={im4} alt="image 4" className="w-[15.82%] h-[63px]" />
        <img src={im5} alt="image 5" className="w-[7.33%] h-[81px]" />
        <img src={im6} alt="image 6" className="w-[11.16%] h-[44px]" />
        <img src={im2} alt="image 2" className="w-[16.99%] h-[50px]" />
      </Slider>
    </div>
  );
}

export default Images;
