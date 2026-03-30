import React, { use } from "react";
import ProductPlan from "./ProductPlan";

const DigitalProducts = ({ planPromise }) => {
  const plans = use(planPromise);
  // console.log(plans);
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl">Premium Digital Tools</h1>
      <p className="text-center mb-5">
        Choose from our curated collection of premium digital products designed
        to <br />
        boost your productivity and creativity.
      </p>
      <div className="flex justify-center gap-5 mb-10">
        <button>Products</button>
        <button>Cart(0)</button>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-10 w-[60%] mx-auto">
        {plans.map((plan) => (
          <ProductPlan plan={plan}></ProductPlan>
        ))}
      </div>
    </div>
  );
};

export default DigitalProducts;
