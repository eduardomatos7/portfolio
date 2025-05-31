import React from "react";

function TitlePage({ title }: { title: String }) {
  return (
    <div className="flex justify-center items-center gap-1" data-aos="fade-right">
      <h1 className="text-2xl sm:text-2xl md:text-3xl font-poppins text-gray-400 uppercase">{title}</h1>
      <div className=" flex-1 animated-border-divider rounded-xl"></div>
    </div>
  );
}

export default TitlePage;
