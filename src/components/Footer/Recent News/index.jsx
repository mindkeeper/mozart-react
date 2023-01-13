import React from "react";

function RecentNews() {
  const data = [
    { content: "Vocal Practice" },
    { content: "Master of Ceremony" },
    { content: "Band Music" },
  ];
  return (
    <div className={"flex flex-col justify-start flex-1"}>
      <p className={"text-white text-sm font-bold mb-10"}>Recent News</p>
      <div className="flex flex-col">
        {data.map((item, index) => {
          return (
            <div key={index} className={"flex flex-row gap-3 mb-2"}>
              <p className={"text-xs font-light"}>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentNews;
