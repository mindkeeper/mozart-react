import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="w-full md:w-4/5 mx-auto my-0 md:mx-auto bg-slate-400 h-8">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
