import PlaylistCard from "./PlaylistCard";
import MoreBtn from "./MoreBtn";
import ArtistCard from "./ArtistCard";

interface SongRowProps {
  display: string;
  data: Record<string, any>[];
  heading: string;
}
const SongRow: React.FC<SongRowProps> = ({ display, data, heading }) => {
  return (
    <div className="lg:w-full lg:max-w-[1000px] px-5">
      <h2 className="text-4xl uppercase font-semibold tracking-[0.4px] lg:text-[40px] mb-9 text-gray-700">
        {heading}
      </h2>
      <div className="overflow-x-visible overflow-y-visible">
        <div className="relative -ml-5 -mr-5 flex z-10 overflow-x-scroll flex-nowrap lg:flex-wrap lg:overflow-visible">
          {heading !== "playlists" &&
            data.map((card, index: number) => (
              <ArtistCard
                key={index}
                display={heading}
                image={card.image}
                name={card.name}
              />
            ))}
          {heading === "playlists" &&
            data.map((card, index: number) => (
              <PlaylistCard
                key={index}
                display={heading}
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
              />
            ))}
          {heading === "playlists" && (
            <div className="absolute hidden lg:block w-[140px] h-[130px] -z-10 -top-[85px] -right-[40px]">
              <img src="https://mdundo.com/media/img/playlist_ico.png" alt="playlist" />
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <MoreBtn display={display} />
        </div>
      </div>
    </div>
  );
};

export default SongRow;
