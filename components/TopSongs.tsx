import SongList from "./SongList";
import { topSongs } from "./data";

const TopSongs = () => {
  return (
    <div className="bg-body px-3 font-body pb-10 pt-10 lg:pt-8 small:px-4 lg:flex lg:items-center flex-col">
      <SongList display data={topSongs} />
    </div>
  );
};

export default TopSongs;