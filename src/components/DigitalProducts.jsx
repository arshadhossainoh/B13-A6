import React, { use } from "react";
import ProductPlan from "./ProductPlan";

const DigitalProducts = ({
  planPromise,
  activeTab,
  setActiveTab,
  cart,
  setCart,
}) => {
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
      {/* <div className="flex justify-center gap-5 mb-10">
        <button>Products</button>
        <button>Cart(0)</button>
      </div> */}

      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 "
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${cart.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "products" && (
        <div className="grid grid-cols-3 gap-5 mb-10 w-[70%] mx-auto">
          {plans.map((plan) => (
            <ProductPlan
              key={plan.id}
              plan={plan}
              cart={cart}
              setCart={setCart}
            ></ProductPlan>
          ))}
        </div>
      )}
    </div>
  );
};

export default DigitalProducts;
