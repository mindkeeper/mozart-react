import React from "react";
import mail from "../../../assets/images/mail-icon.png";
import whatsapp from "../../../assets/images/phone-icon.png";
import phone from "../../../assets/images/whatsapp-icon.png";
function ContactUs() {
  const data = [
    { content: "(022) 8732-9154", icon: phone, alt: "phone" },
    { content: "Yourgreatemail.co", icon: mail, alt: "email" },
    { content: "1234-5678-9087", icon: whatsapp, alt: "whatsapp" },
  ];
  return (
    <div className={"flex flex-col start flex-1"}>
      <p className={"text-white text-sm font-bold mb-10"}>Contact Us</p>
      <div className="flex flex-col">
        {data.map((item, index) => {
          return (
            <div key={index} className={"flex flex-row gap-3 mb-2"}>
              <img src={item.icon} alt={item.alt} />
              <p className={"text-xs font-light"}>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactUs;
