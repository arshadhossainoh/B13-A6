import "./App.css";
import Banner from "./components/Banner";
import BeforeFooter from "./components/BeforeFooter";
import DigitalProducts from "./components/DigitalProducts";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

const getPlans = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const planPromise = getPlans();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <DigitalProducts planPromise={planPromise}></DigitalProducts>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <BeforeFooter></BeforeFooter>
      <Footer></Footer>
    </>
  );
}

export default App;
