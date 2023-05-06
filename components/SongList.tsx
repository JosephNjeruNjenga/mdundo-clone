import MoreBtn from "./MoreBtn";
import Song from "./Song";

interface SongListProps {
  display: string;
  data: Record<string, any>[];
}

const SongList: React.FC<SongListProps> = ({ display, data }) => {
  return (
    <div className="lg:w-full lg:max-w-[1000px]">
      <h2
        className={`uppercase text-gray-700 pl-1 text-2xl small:text-2xl medium:text-3xl pb-4 lg:pb-8 ${
          display ? "" : "hidden"
        }`}
      >
        top songs
      </h2>
      {data.map((song, index: number) => (
        <Song
          key={index}
          title={song.title}
          artist={song.artist}
          time={song.time}
          genre={song.genre}
        />
      ))}
      <MoreBtn display={display} />
    </div>
  );
};

export default SongList;
