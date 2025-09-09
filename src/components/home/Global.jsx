import React from "react";
import map from "../../assets/map.png";

function Global() {
  return (
    <div className="flex flex-col gap-[84px] cont mx-auto mt-[107px]">
      <h1 className="display text-[48px] leading-[36px] text-[#98661C]">
        Our Global Footprint
      </h1>
      <img src={map} alt="map" className="w-100% h-[657px]"></img>
    </div>
  );
}

export default Global