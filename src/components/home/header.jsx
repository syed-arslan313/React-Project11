import React from "react";

import Logo from "../../assets/Logo.svg";
import Arrow from "../../assets/arrow.svg";
import Dropicon from "../../assets/dropdown.svg";
import hero from "../../assets/hero.svg";
import menu from "../../assets/menu.svg";

function Header() {
  return (
    <div>
      <div className="flex flex-col md:h-[808px]  md:pb-0 pb-[71px] bg-gradient-to-b from-[#9A6820] to-[#FFF3E000] items-center pt-[12px] md:px-[25px] px-[9px] md:mt-[13px] md:mx-[13px] md:rounded-tl-3xl md:rounded-tr-3xl">
        {/* Header Start */}
        <div className="flex flex-row justify-between items-center max-w-[1367px] w-full bg-white md:h-[88px] h-[72px] rounded-[20px] md:px-6 px-[18px] ">
          <img
            src={Logo}
            alt="My Logo"
            className="md:w-[86px] md:h-[69px] w-[66px] h-[54px]"
          />

          <ul className="neu text-base text-[#0F3B4A] md:flex flex-row gap-8 tracking-[1px] hidden">
            <li>Home</li>
            <li>About</li>
            <li className="flex flex-row gap-1 w-[76px] items-center">
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

          {/* Right side (button + menu) */}
          <div className="flex flex-row items-center gap-3">
            <button className="bg-[#C49E46] py-[5px] pl-[17px] pr-[5px] rounded-[5px] flex flex-row gap-3 items-center cursor-pointer">
              <p className="inter md:text-[15px] text-[12px] text-white font-medium">
                +123 456 7890
              </p>
              <div className="bg-[#0F3B4A1A] md:h-[40px] md:w-[40px] w-[30px] h-[30px] rounded-[3px] flex justify-center items-center">
                <img src={Arrow} alt="Arrow" className="w-[9px] h-[8px]" />
              </div>
            </button>

            <img
              src={menu}
              alt="menu icon"
              className="w-[26px] h-[18px] md:hidden"
            />
          </div>
        </div>

        {/* Header End */}

        {/* Hero Section Start */}

        <div className="flex md:flex-row flex-col items-center md:gap-[59px] max-w-[1101px] w-full ">
          <div className="md:w-[44.7%] items-center md:items-start flex flex-col gap-6 pt-[45px] md:pt-[73px]">
            <h1 className="display w-[285px] md:text-[64px] text-[50px] md:leading-[59px] leading-[49px] text-white text-center md:text-start  ">
              Building Sustainable Futures
            </h1>
            <p className="neu text-base leading-6 black font- w-[80%] text-center md:text-star">
              Golby Diop Holding is a diversified group operating across six key
              sectors, delivering innovative solutions and creating lasting
              impact in the markets we serve.
            </p>

            <div className="md:flex hidden flex-row pt-2 gap-4">
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
            className="md:w-[539px] md:h-[603px] w-[328px] h-[367px] md:mt-[29px]"
          />

          <div className="flex flex-row pt-[39px] gap-4 md:hidden flex-wrap justify-center">
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
        {/* Hero Section Start */}
      </div>
    </div>
  );
}

export default Header;
