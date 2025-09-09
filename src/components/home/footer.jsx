import React from "react";
import Logo from "../../assets/Logo.svg";
import Fb from "../../assets/fb.svg";
import Twiter from "../../assets/twiter.svg";
import link from "../../assets/link.svg";
import insta from "../../assets/insta.svg";
import wechat from "../../assets/wechat.svg";
import whtsapp from "../../assets/whatsapp.svg";
import loc from "../../assets/loc.svg";
import mail from "../../assets/MAIL.svg";
import phone from "../../assets/phone.svg";

function Footer() {
  return (
    <div className="bg-[#111827] pt-[57px] pb-[31px] rounded-t-[20px] ml-[13px] mr-[11px]">
      <div className="cont mx-auto flex flex-row justify-between">
        <div className="flex flex-col gap-[12px]">
          <img src={Logo} alt="logo" className="w-[73px] h-[58px]"></img>

          <p className="inter text-[15px text-white w-[240px]">
            Building sustainable futures across six key industries.
          </p>

          <div className="flex flex-row gap-[10px]">
            <img src={Fb} alt="logo" className="w-[16px] h-[16px]"></img>
            <img src={Twiter} alt="logo" className="w-[16px] h-[16px]"></img>
            <img src={link} alt="logo" className="w-[16px] h-[16px]"></img>
            <img src={insta} alt="logo" className="w-[16px] h-[16px]"></img>
            <img src={wechat} alt="logo" className="w-[16px] h-[16px]"></img>
            <img src={whtsapp} alt="logo" className="w-[16px] h-[16px]"></img>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] ">
          <h1 className="inter font-bold text-[17px] leading-[28px] text-white">
            Company
          </h1>

          <ul className="text-[15px] text-white inter cursor-pointer flex flex-col gap-[12px]">
            <li>About Us</li>
            <li>Leadership</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px] ">
          <h1 className="inter font-bold text-[17px] leading-[28px] text-white">
            Activities
          </h1>

          <ul className="text-[15px] text-white inter cursor-pointer flex flex-col gap-[12px]">
            <li>Import-Export</li>
            <li>BTP</li>
            <li>Cosmetics</li>
            <li>Automotive</li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px] ">
          <h1 className="inter font-bold text-[17px] leading-[28px] text-white">
            Activities
          </h1>

          <ul className="text-[15px] text-white inter cursor-pointer flex flex-col gap-[12px]">
            <li>Import-Export</li>
            <li>BTP</li>
            <li>Cosmetics</li>
            <li>Automotive</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[16px] ">
          <h1 className="inter font-bold text-[17px] leading-[28px] text-white"></h1>

          <ul className="text-[15px] text-white inter cursor-pointer flex flex-col gap-[12px]">
            <li>Energy & Water</li>
            <li>Agriculture</li>
            <li>Aviculture</li>
            <li>Food</li>
          </ul>
        </div>

        <div className="flex flex-col ">
          <h1 className="inter font-bold text-[17px] leading-[28px] text-white">
            Contact
          </h1>

          <div className="flex flex-row gap-[12px] pt-[16px]">
            <img src={loc} alt="loc" className="w-[16px] h-[24px]"></img>
            <h1 className="inter text-[15px] text-white">
              123 Business Avenue, City, Country
            </h1>
          </div>
          <div className="flex flex-row gap-[12px] pt-[12px]">
            <img src={mail} alt="loc" className="w-[16px] h-[24px]"></img>
            <h1 className="inter text-[15px] text-white">info@golbydiop.com</h1>
          </div>
          <div className="flex flex-row gap-[12px] pt-[12px]">
            <img src={phone} alt="loc" className="w-[16px] h-[24px]"></img>
            <h1 className="inter text-[15px] text-white">+123 456 7890</h1>
          </div>
        </div>
      </div>

      <div
        className=" flex flex-row cont justify-between   border-t-[1px] border-solid  border-white mx-auto mt-[60px]
"
      >

         <h1 className="inter text-[14px] text-white pt-[30px]">© 2025 Golby Diop Holding. All rights reserved.</h1>
        

          <ul className="flex flex-row text-[15px] gap-[24px] inter text-white pt-[30px]">

           <li>Privacy Policy</li>
           <li>Terms of Service</li>

          </ul>

      </div>
    </div>
  );
}

export default Footer;
