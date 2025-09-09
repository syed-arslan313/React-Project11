import React from "react";
import im1 from "../../assets/i1.png";
import im2 from "../../assets/i2.png";
import im3 from "../../assets/i3.png";
import im4 from "../../assets/i4.png";
import im5 from "../../assets/i5.png";
import im6 from "../../assets/i6.png";

function Images() {
  return (
    <div className="flex flex-row gap-[48px] cont mx-auto mt-[115px]">
      <img src={im1} alt="image 1" className="w-[15.49%] h-[74px]"></img>
      <img src={im2} alt="image 2" className="w-[16.99%] h-[50px]"></img>
      <img src={im3} alt="image 3" className="w-[12.82%] h-[51px]"></img>
      <img src={im4} alt="image 4" className="w-[15.82%] h-[63px]"></img>
      <img src={im5} alt="image 5" className="w-[7.33%] h-[81px]"></img>
      <img src={im6} alt="image 6" className="w-[11.16%] h-[44px]"></img>
    </div>
  );
}

export default Images;
