import React from "react";

function TitlePage({ title }: { title: String }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <h1 className="text-lg sm:text-xl md:text-2xl text-gray-400 uppercase">{title}</h1>
      <div className=" flex-1 animated-border-divider rounded-xl"></div>
    </div>
  );
}

export default TitlePage;
