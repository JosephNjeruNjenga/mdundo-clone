import SongList from "./SongList"

const TopSongs = () => {
  return (
    <div className="bg-[#f9f8f8] pt-10 px-3 font-body lg:flex flex-col small:px-4 lg:items-center pb-10 lg:pt-8">
      <SongList display />
    </div>
  );
}

export default TopSongs