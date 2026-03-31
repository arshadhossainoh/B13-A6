import React from "react";

const Cart = ({ cart, handleCheckout, handleRemove }) => {
  console.log(cart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {cart.length === 0 ? (
        <div className="container mx-auto mb-50">
          <h1 className="font-bold text-2xl text-center mt-30">
            No Item Yet, Go Shopping
          </h1>
        </div>
      ) : (
        <div className="mb-50 space-y-5 border border-gray-200 mt-5 container mx-auto p-5 w-[70%]">
          <h1 className="font-bold text-2xl ">Your Cart</h1>
          {/* {cart.length === 0 ? "Cart is Empty" : ""} */}
          {cart.map((item) => (
            <div key={item.id} className="container mx-auto ">
              <div>
                <div className="flex items-center justify-between bg-gray-100 rounded-md p-2 ">
                  <div className="flex items-center gap-10">
                    <img
                      className="h-15 w-15  rounded-full"
                      src={item.icon}
                      alt=""
                    />
                    <div>
                      <h2 className="text-xl font-bold">{item.name}</h2>
                      <h1 className="font-semibold">${item.price}</h1>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(item)}
                    className="text-red-700 font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] w-full rounded-full text-white"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
