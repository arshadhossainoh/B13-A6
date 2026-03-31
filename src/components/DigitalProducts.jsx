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

      <div className="flex justify-center gap-2 bg-gray-100 p-1 rounded-full w-fit mx-auto">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === "products"
              ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
              : "text-gray-600"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === "cart"
              ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
              : "text-gray-600"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>
      {/* <div className="flex justify-center gap-5 mb-10">
        <button>Products</button>
        <button>Cart(0)</button>
      </div> */}

      {/* <div className="tabs tabs-box justify-center bg-transparent"> */}
      {/* <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Products"
          value="products"
          defaultChecked
          onClick={() => setActiveTab("products")}
        /> */}

      {/* <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${
            activeTab === "products"
              ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
              : "bg-white"
          }`}
          value="Products"
          checked={activeTab === "products"}
          onClick={() => setActiveTab("products")}
        /> */}
      {/* <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${cart.length})`}
          onClick={() => setActiveTab("cart")}
        /> */}
      {/* <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40  ${
            activeTab === "cart"
              ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
              : "bg-white"
          }`}
          value={`Cart (${cart.length})`}
          checked={activeTab === "cart"}
          onClick={() => setActiveTab("cart")}
        /> */}
      {/* </div> */}

      {activeTab === "products" && (
        <div className="grid md:grid-cols-3 gap-5 mb-10 w-[70%] mx-auto">
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
