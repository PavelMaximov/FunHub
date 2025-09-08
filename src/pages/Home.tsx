import React from "react";
import BannerSlider from "../components/Banner/BannerSlider";
import Category from "../components/Category/Categoty";

const Home: React.FC = () => {
  return (
    <>
     <BannerSlider />
      <Category />
    </>
  );
};

export default Home;