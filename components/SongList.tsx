import Facebook from "./Facebook";
import MoreBtn from "./MoreBtn";
import Song from "./Song";

interface SongListProps {
  display?: string;
  heading?: string;
  data: Record<string, any>[];
}

const SongList: React.FC<SongListProps> = ({ display, heading, data }) => {
  return (
    <div className="lg:w-full lg:max-w-[960px]">
      {display === "More DJ Mixes" && (
        <div className="flex justify-end">
          <Facebook />
        </div>
      )}
      {heading && (
        <h2 className="uppercase text-gray-700 pl-1 text-2xl font-semibold small:text-2xl medium:text-3xl pb-4 lg:pb-8">
          {heading}
        </h2>
      )}
      {data.map((song, index: number) => (
        <Song
          key={index}
          title={song.title}
          artist={song.artist}
          time={song.time}
          genre={song.genre}
        />
      ))}
      {display && (
        <div className="flex justify-end mt-[30px]">
          <MoreBtn display={display} />
        </div>
      )}
    </div>
  );
};

export default SongList;
