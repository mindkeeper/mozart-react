import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

import { IonIcon } from "react-ion-icon";
function Navbar() {
  const navigate = useNavigate();
  const urls = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-slate-200 md:flex  md:justify-between py-4 md:my-0 px-5 md:px-7">
        <div className="flex gap-4">
          <img src={logo} alt="brand-logo" className={"w-14 h-14"} />
          <div>
            <h1
              className={
                "font-bold text-2xl hidden md:block hover:text-slate-500 duration-500 cursor-pointer"
              }
            >
              Mozart
            </h1>
            <h2 className={"font-medium text-base hidden md:block"}>
              Music Course Agency
            </h2>
          </div>
        </div>
        <div
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden"
        >
          <IonIcon name={isMenuOpen ? "close" : "menu"} />
        </div>
        <ul
          className={`md:flex md:items-center bg-slate-200 md:bg-none pb-12 md:pb-0 absolute md:static z-[-1] md:z-auto left-0 w-full md:w-auto pl-6 md:pl-0 transition-all duration-500 ease-in ${
            isMenuOpen ? "top-20 " : "top-[-490px]"
          }`}
        >
          {urls.map((item) => {
            return (
              <li
                className={
                  "md:ml-7 md:my-0 my-5 text-base font-bold hover:text-slate-500 duration-500 cursor-pointer"
                }
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </li>
            );
          })}
          <button
            className={
              "bg-primary-green-500 text-slate-800 px-6 py-2 rounded-md hover:bg-primary-green-300 hover:text-slate-600 font-bold text-base duration-500 md:ml-8"
            }
          >
            Get Started
          </button>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
