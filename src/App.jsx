import { Routes, Route, useLocation } from "react-router-dom"; // ✅ Only router stuff
import { useEffect } from "react"; // ✅ useEffect comes from 'react'

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import "./index.css";
import NewsUpdatesSection from "./component/NewsUpdatesSection";
import AllSection from "./component/AllSection";
import Steel from "./Product/Steel";
import Footer from "./component/Footer";
import Polymers from "./Product/Polymers";
import Bitumen from "./Product/Bitumen";
import NonFerrous from "./Product/NonFerrous";
import Pipes from "./Product/Pipes";
import Chemicals from "./Product/Chemicals";
import AgriCommodities from "./Product/AgriCommodities";
import BricksBlocks from "./Product/BricksBlocks";
import Product from "./Product/Product";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "../src/Contact/Contact"
import About from "../src/About/About";
import Service from "../src/Service/Service"
import SolutionsFullSection from "../src/Solution/SolutionsFullSection"
import Otp from "./Login/Otp";
import Admin from "./Product/Admin";
import Form from "./Form";
import MyProfile from "./Login/MyProfile";


gsap.registerPlugin(ScrollTrigger);



// import Login from "./component/Login";

function App() {
   const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    
      <Navbar />
       <Routes>
         <Route path="/" element={<AllSection />} />
         <Route path="/steel" element={<Steel />} />
         <Route path="/polymers" element={<Polymers />} />
         <Route path="/bitumen" element={<Bitumen />} />
         <Route path="/non-ferrous" element={<NonFerrous />} />
         <Route path="/pipes" element={<Pipes />} />
         <Route path="/chemicals" element={<Chemicals />} />
         <Route path="/agri-commodities" element={<AgriCommodities />} />
         <Route path="/bricks-blocks" element={<BricksBlocks />} />
         <Route path="/categories" element={<Product />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Service />} />
         <Route path="/solutions" element={<SolutionsFullSection />} />
         <Route path="/login" element={<Otp />} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/form" element={<Form/>}/>
         <Route path="/profile" element={<MyProfile />} />

       </Routes>
       <Footer />
    </>
  );
}

export default App;
