import React from "react";
import logo from "../../../assets/images/logo.png";
function Brands() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex gap-4 justify-start mb-5">
        <img src={logo} alt="brand-logo" className={"w-10 h-10"} />
        <div>
          <h1
            className={
              "font-bold text-sm  hover:text-slate-500 duration-500 cursor-pointer"
            }
          >
            Mozart
          </h1>
          <h2 className={"text-xs font-light"}>Music Course Agency</h2>
        </div>
      </div>
      <p className="font-light text-xs text-left w-4/5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
    </div>
  );
}

export default Brands;
