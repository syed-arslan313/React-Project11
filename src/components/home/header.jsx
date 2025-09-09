import React from "react";

import Logo from "../../assets/Logo.svg";
import Arrow from "../../assets/arrow.svg";
import Dropicon from "../../assets/dropdown.svg";
import hero from "../../assets/hero.svg";



function Header() {
  return(
    <div>
      <div className="flex flex-col h-[808px] bg-gradient-to-b from-[#9A6820] to-[#FFF3E000] items-center pt-[12px] px-[25px] mt-[13px] mx-[13px] rounded-tl-3xl rounded-tr-3xl">
        {/* Header Start */}
        <div className="flex flex-row justify-between items-center max-w-[1367px] w-full bg-white h-[88px] rounded-[20px] px-6 ">
          <img src={Logo} alt="My Logo" className="w-[86px] h-[69px] " />

          <ul className="neu text-base text-[#0F3B4A] flex flex-row gap-8 tracking-[1px]">
            <li>Home</li>
            <li>About</li>
            <li className="flex flex-row gap-1 w-[76px] items-center ">
              <p>Services</p>
              <img
                src={Dropicon}
                alt="Drop Icon"
                className="w-[40px] h-[7px] cursor-pointer"
              />
            </li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <button className="bg-[#C49E46] py-[5px] pl-[17px] pr-[5px] rounded-[5px] flex flex-row gap-3 items-center cursor-pointer ">
            <p className="inter text-[15px] text-white  font-medium">
              +123 456 7890
            </p>

            <div className="bg-[#0F3B4A1A] h-[40px] w-[40px] rounded-[3px] flex justify-center items-center">
              <img src={Arrow} alt="Arrow" className="w-[9px] h-[8px]" />
            </div>
          </button>
        </div>
        {/* Header End */}

        {/* Hero Section Start */}

        <div className="flex flex-row gap-[59px] max-w-[1101px] w-full ">
          <div className="w-[44.7%] flex flex-col gap-6 pt-[73px]">
            <h1 className="display text-[64px] leading-[59px] text-white  ">
              Building Sustainable Futures
            </h1>
            <p className="neu text-base leading-6 black font- w-[80%]">
              Golby Diop Holding is a diversified group operating across six key
              sectors, delivering innovative solutions and creating lasting
              impact in the markets we serve.
            </p>

            <div className="flex flex-row pt-2 gap-4">
              <button className="bg-black py-3 px-6 rounded-[46px] cursor-pointer">
                <p className="neu text-[15px] text-white ">
                  Explore Our Activities
                </p>
              </button>
              <button className="border border-black px-[25px] py-[13px] rounded-[54px] cursor-pointer">
                <p className="neu text-[15px] text-black ">Contact Us</p>
              </button>
            </div>
          </div>

          <img
            src={hero}
            alt="Hero Image"
            className="w-[539px] h-[603px] mt-[29px]"
          />
        </div>
        {/* Hero Section Start */}
      </div>
    </div>
  );
}

export default Header