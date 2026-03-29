import React from "react";
import bannerImg from "../assets/banner.png";
import btnImg from "../assets/play.png";

const Banner = () => {
  return (
    <div className="container mx-auto w-[60%] mt-20 flex md:justify-between items-center">
      {/* left side  */}
      <div className="space-y-5">
        <button>New AI-Powered Tools Available</button>
        <h1 className="font-bold text-3xl">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p>
          Access premium AI tools, design assets, templates, and productivity
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="md:flex">
          <button className=" bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full mb-2 mr-3 p-5">
            Explore Products
          </button>
          <button className="flex items-center text-purple-500 border border-purple-300 rounded-full p-5">
            <img src={btnImg} alt="" />
            Watch Demo
          </button>
        </div>
      </div>
      {/* right side  */}
      <div>
        <img className="" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
