import "./App.css";
import Banner from "./components/Banner";
import DigitalProducts from "./components/DigitalProducts";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <DigitalProducts></DigitalProducts>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </>
  );
}

export default App;
