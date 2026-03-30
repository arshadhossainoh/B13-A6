import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto  bg-[#101727] ">
      <div className=" w-[80%] mx-auto flex justify-between text-white p-10 ">
        <div>
          <h1 className="text-2xl mb-2">DigiTools</h1>
          <p className="text-xs">
            Premium digital tools for creators,
            <br /> professionals, and businesses. Work smarter <br /> with our
            suite of powerful tools.
          </p>
        </div>

        <div>
          <h3>Product</h3>
          <p className="text-xs">Features</p>
          <p className="text-xs">Pricing</p>
          <p className="text-xs">Templates</p>
          <p className="text-xs">Integrations</p>
        </div>
        <div>
          <h3>Company</h3>
          <p className="text-xs">About</p>
          <p className="text-xs">Blog</p>
          <p className="text-xs">Careers</p>
          <p className="text-xs">Press</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p className="text-xs">Documentation</p>
          <p className="text-xs">Help Center</p>
          <p className="text-xs">Community</p>
          <p className="text-xs">Contact</p>
        </div>
        <div>
          <h3>Social Links</h3>
          <div className="flex gap-2">
            <p>
              <FaLinkedin></FaLinkedin>
            </p>
            <p>
              <FaFacebook></FaFacebook>
            </p>
            <p>
              <BsTwitterX></BsTwitterX>
            </p>
          </div>
        </div>
      </div>
      <hr className="text-white pb-5 w-[80%] mx-auto" />
      <div className="flex justify-between w-[80%] mx-auto pb-5">
        <p className="text-white text-xs">
          @2026 Digitools. All rights reserved.
        </p>
        <div className="text-white flex gap-3 ">
          <p className="text-xs">Privacy Policy</p>
          <p className="text-xs">Terms of Service</p>
          <p className="text-xs">Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
