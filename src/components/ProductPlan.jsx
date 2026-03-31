import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductPlan = ({ plan, cart, setCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleBuy = () => {
    toast("added to cart !");
    setIsAddedToCart(!isAddedToCart);
    setCart([...cart, plan]);
  };
  // console.log(cart);
  return (
    <div
      key={plan.id}
      className="h-90 w-90 border  border-gray-200 rounded-xl relative p-3 space-y-3"
    >
      <button
        className={`p-1 ${plan.tag === "new" ? "bg-green-300" : plan.tag === "best seller" ? "bg-yellow-300" : "bg-purple-500"} rounded-full absolute left-70 py-1 px-2 text-xs`}
      >
        {plan.tag}
      </button>
      <img className="h-15 w-15 rounded-full" src={plan.icon} alt="" />
      <h1 className="font-bold">{plan.name}</h1>
      <p>{plan.description}</p>
      <p>
        <span className="font-bold">${plan.price}</span>/{plan.period}
      </p>
      <div>
        {plan.features.map((feature, index) => (
          <p key={index} className="flex items-center gap-2 pb-2">
            <FaCheck className="text-green-400"></FaCheck>
            {feature}
          </p>
        ))}
      </div>
      <button
        onClick={handleBuy}
        className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] w-[90%]  rounded-xl ml-5"
      >
        {!isAddedToCart ? "Buy Now" : "Added To Cart"}
      </button>
    </div>
  );
};

export default ProductPlan;
