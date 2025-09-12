import React from "react";
import map from "../../assets/map.png";

function Global() {
  return (
    <div className="flex flex-col gap-[84px] cont mx-auto mt-[107px]">
      <h1 className="display text-[48px] md:text-start  text-center leading-[36px] text-[#98661C]">
        Our Global Footprint
      </h1>
      <img src={map} alt="map" className="w-100% md:h-[657px] h-[356px]"></img>
    </div>
  );
}

export default Global;
