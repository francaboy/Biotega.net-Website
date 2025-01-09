import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/Shared/Footer";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import PortfolioThreeColGallery from "./PortfolioThreeColGallery/PortfolioThreeColGallery";

const PortfolioThreeCol = () => {
  return (
    <>
      <HomeHeader />
      <CommonPageHeader title="Naši Partneri" subtitle="Partneri" />
      <PortfolioThreeColGallery />
      <Footer />
    </>
  );
};

export default PortfolioThreeCol;
