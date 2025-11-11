import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/Shared/Footer";

import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeOurTeam from "../Home/Home/HomeOurTeam/HomeOurTeam";

import AboutAppoinment from "./AboutAppoinment/AboutAppoinment";
import AboutArea from "./AboutArea/AboutArea";


const AboutUs = () => {
  return (
    <>
      <HomeHeader />
      <CommonPageHeader title="O Nama" subtitle="O Nama" />
      <AboutArea />

      <AboutAppoinment />
      <HomeOurTeam />

      <Footer />
    </>
  );
};

export default AboutUs;
