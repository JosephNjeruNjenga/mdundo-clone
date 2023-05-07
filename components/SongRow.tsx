import React from "react";
import Card from "./Card";
import MoreBtn from "./MoreBtn";

interface SongRowProps {
  display: string;
  data: Record<string, any>[];
  heading: string;
}
const SongRow: React.FC<SongRowProps> = ({ display, data, heading }) => {
  return (
    <div className="lg:w-full lg:max-w-[1000px]">
      <h2 className="text-4xl uppercase tracking-[0.4px] lg:text-[40px] pl-1 small:pl-2  lg:pl-[20px] mb-9 text-gray-700">
        {heading}
      </h2>
      <div className="relative w-full flex lg:ml-0 z-10 flex-nowrap lg:flex-wrap lg:overflow-visible overflow-x-scroll">
        {data.map((card, index: number) => (
          <Card
            key={index}
            display={heading}
            title={card.title}
            subtitle={card.subtitle}
            image={card.image}
            name={card.name}
          />
        ))}
        {heading === "playlists" && (
          <div className="absolute hidden lg:block w-[140px] h-[130px] -z-10 -top-[85px] -right-[40px]">
            <img src="https://mdundo.com/media/img/playlist_ico.png" alt="" />
          </div>
        )}
      </div>
      <MoreBtn display={display} />
    </div>
  );
};

export default SongRow;
