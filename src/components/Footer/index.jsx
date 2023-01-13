import React from "react";
import Brands from "./Brands";
import ContactUs from "./Contact Us";
import RecentNews from "./Recent News";
import Subscribe from "./Subscribe";
function Footer() {
  return (
    <div
      className={
        "w-full px-5 py-32 gap-12 bg-primary-black flex flex-col md:flex-row md:align-top md:justify-between text-white"
      }
    >
      <Brands />
      <ContactUs />
      <RecentNews />
      <Subscribe />
    </div>
  );
}

export default Footer;
