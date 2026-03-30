import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="container mx-auto my-10 ">
      <h1 className="text-center font-bold text-2xl">
        Simple, Transparent Pricing
      </h1>
      <p className="text-center font-light mb-10">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      {/* <p className="rounded-full w-25 ml-180 bg-amber-200 text-center">
        Most Popular
      </p> */}
      {/* cards */}
      <div className="md:flex justify-center gap-10">
        <div className="space-y-5 bg-gray-50 rounded-xl p-5">
          <h1 className="font-bold">Starter</h1>
          <p className="font-light">Perfect for getting started</p>
          <p className="font-light">
            <span className="font-bold">$0</span>/Month
          </p>
          <div>
            <p className="flex items-center gap-1 font-light">
              <span className="text-green-300">
                <FaCheck></FaCheck>
              </span>
              Access to 10 free tools
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-green-300">
                <FaCheck></FaCheck>
              </span>
              Basic templates
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-green-300">
                <FaCheck></FaCheck>
              </span>
              Community support
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-green-300">
                <FaCheck></FaCheck>
              </span>
              1 project per month
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] w-full rounded-full">
            Get Started Free
          </button>
        </div>
        <div className="space-y-5 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] p-5 text-white rounded-xl -mt-1 relative">
          <button className="bg-pink-400 rounded-full p-1 absolute -top-3 left-13 ">
            Most Popular
          </button>
          <h1 className="font-bold">Pro</h1>
          <p className="font-light">Best for professionals</p>
          <p className="font-light">
            <span className="font-bold">$29</span>/Month
          </p>
          <div>
            <p className="flex items-center gap-1 font-light">
              <span className="text-white">
                <FaCheck></FaCheck>
              </span>
              Access to 10 free tools
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-white">
                <FaCheck></FaCheck>
              </span>
              Basic templates
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-white">
                <FaCheck></FaCheck>
              </span>
              Community support
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-white">
                <FaCheck></FaCheck>
              </span>
              1 project per month
            </p>
          </div>
          <button className="bg-white w-full rounded-full text-purple-500">
            Start Pro Trial
          </button>
        </div>
        <div className="space-y-5 bg-gray-50 rounded-xl p-5">
          <h1 className="font-bold">Enterprise</h1>
          <p className="font-light">For teams and businesses</p>
          <p className="font-light">
            <span className="font-bold">$99</span>/Month
          </p>
          <div>
            <p className="flex items-center gap-1 font-light">
              <span className="text-green-300">
                <FaCheck></FaCheck>
              </span>
              Everything in Pro
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-green-300">
                <FaCheck></FaCheck>
              </span>
              Team collaboration
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-green-300">
                <FaCheck></FaCheck>
              </span>
              Custom integrations
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-green-300">
                <FaCheck></FaCheck>
              </span>
              Dedicated support
            </p>
            <p className="flex items-center gap-1 font-light">
              <span className="text-green-300">
                <FaCheck></FaCheck>
              </span>
              SLA guarantee
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] w-full rounded-full">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
