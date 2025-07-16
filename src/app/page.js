"use client";

import React from "react";
import Navbar from "./components/Navbar";
import MainHerro from "./components/MainHerro";
import PropertyType from "./components/PropertyType";
import RecentProperty from "./components/RecentProperty";
import OurAward from "./components/OurAward";
import Location from "./components/Location";
import FeatureAgent from "./components/FeatureAgent";
import PricingPackages from "./components/PricingPackeges";
const page = () => {
  return (
    <>
      <Navbar />
      <MainHerro />
      <PropertyType />
      <RecentProperty />
      <OurAward />
      <Location />
      <FeatureAgent />
      <PricingPackages />
    </>
  );
};

export default page;
