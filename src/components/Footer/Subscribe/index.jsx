import React from "react";
import paperPlane from "../../../assets/images/paperPlane.png";
function Subscribe() {
  return (
    <div className={"flex flex-col justify-start flex-1"}>
      <p className={"text-white text-sm font-bold mb-10"}>Subscribe Us</p>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="type your message"
          className="px-2 py-2"
        />
        <button className="flex flex-row gap-4 items-center justify-center py-2 bg-primary-green-500">
          <img alt="paper-plane" src={paperPlane} />
          <p className="text-black font-semibold">Send to Us</p>
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
