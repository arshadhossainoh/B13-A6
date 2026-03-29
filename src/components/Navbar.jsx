import React from "react";
import CartImg from "../assets/products/shopping-cart.png";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between mt-5">
      <h3 className="text-2xl font-bold text-[#4F39f6]">DigiTools</h3>

      <ul className="md:flex gap-5  ">
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Testimonials</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
      <div className="flex gap-5 items-center">
        <img className="h-5 w-5" src={CartImg} alt="" />
        <button>Login</button>
        <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full p-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
