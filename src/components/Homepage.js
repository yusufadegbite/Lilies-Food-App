import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Meals from "./Meals/Meals";
import Footer from "./Footer/Footer";


function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Meals />
      <Footer />
    </div>
  );
};

export default Homepage;
