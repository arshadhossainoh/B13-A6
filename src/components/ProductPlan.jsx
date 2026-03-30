import React from "react";

const ProductPlan = ({ plan }) => {
  return (
    <div
      key={plan.id}
      className="h-70 w-70 border border-gray-200 rounded-xl relative"
    >
      <button
        className={`p-1 ${plan.tag === "new" ? "bg-green-300" : plan.tag === "best seller" ? "bg-yellow-300" : "bg-purple-500"} rounded-full absolute left-50 py-1 px-2 text-xs`}
      >
        {plan.tag}
      </button>
      <button></button>
      <h1>{plan.name}</h1>
      <p>{plan.description}</p>
      <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] w-full rounded-xl">
        Buy Now
      </button>
    </div>
  );
};

export default ProductPlan;
