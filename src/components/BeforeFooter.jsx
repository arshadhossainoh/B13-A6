import React from "react";

const BeforeFooter = () => {
  return (
    <div className="container mx-auto bg-gradient-to-r from-[#4f39f6] to-[#9514fa] p-15 text-center space-y-5">
      <h1 className="text-2xl text-white">Ready To Transform Your Workflow?</h1>
      <p className="text-white text-xs">
        Join thousands of professionals who are already using Digitools to work
        smarter. <br /> Start your free trial today.
      </p>
      <div className="flex justify-center gap-3 ">
        <button className="bg-white rounded-full p-2 text-purple-500 cursor-pointer hover:text-xl">
          Explore Products
        </button>
        <button className="text-white border border-white rounded-full p-2 cursor-pointer hover:text-xl">
          View Pricing
        </button>
      </div>

      <p className="text-white">
        14-day free trail . No credit card required . Cancel anytime
      </p>
    </div>
  );
};

export default BeforeFooter;
