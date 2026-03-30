import React from "react";
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="container mx-auto bg-gray-100">
      <div className="p-10">
        <h1 className="text-2xl font-bold text-center">
          Get Started In 3 Steps
        </h1>
        <p className="text-center font-light">
          Start using premium digital tools in minutes, not hours
        </p>
        <div className="flex justify-around pt-5">
          <div className="bg-white  flex flex-col items-center h-60 w-60 rounded-md space-y-3 p-2">
            <button className="text-white rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] ml-50">
              01
            </button>
            <img className="bg-gray-200 rounded-md" src={userImg} alt="" />

            <h1 className="font-bold">Create Account</h1>
            <p>
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="bg-white  flex flex-col items-center h-60 w-60 rounded-md space-y-3 p-2">
            <button className="text-white rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] ml-50">
              02
            </button>
            <img className="bg-gray-200 rounded-md" src={packageImg} alt="" />
            <h1 className="font-bold">Choose Products</h1>
            <p>Browse our catalog and select the tools that fit your needs.</p>
          </div>

          <div className="bg-white  flex flex-col items-center h-60 w-60 rounded-md space-y-3 p-2">
            <button className="text-white rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] ml-50">
              03
            </button>
            <img
              className="bg-gray-200 rounded-md object-contain"
              src={rocketImg}
              alt=""
            />
            <h1 className="font-bold">Start Creating</h1>
            <p>Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
