import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import BeforeFooter from "./components/BeforeFooter";
import DigitalProducts from "./components/DigitalProducts";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Cart from "./components/Cart";

const getPlans = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const planPromise = getPlans();

function App() {
  const [activeTab, setActiveTab] = useState("products");

  const [cart, setCart] = useState([]);
  const handleCheckout = () => {
    setCart([]);
  };

  const handleRemove = (item) => {
    const newCart = cart.filter((c) => c.id !== item.id);
    setCart(newCart);
  };

  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>

      <DigitalProducts
        planPromise={planPromise}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cart={cart}
        setCart={setCart}
      ></DigitalProducts>

      {activeTab === "cart" && (
        <Cart
          cart={cart}
          handleCheckout={handleCheckout}
          handleRemove={handleRemove}
        ></Cart>
      )}

      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <BeforeFooter></BeforeFooter>
      <Footer></Footer>
    </>
  );
}

export default App;
