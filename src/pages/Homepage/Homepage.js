import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Meals from "../../components/Meals/Meals";
import Footer from "../../components/Footer/Footer";


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
