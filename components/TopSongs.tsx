import SongList from "./SongList"

const TopSongs = () => {
  return (
    <div className="pt-16 px-3 font-body lg:flex flex-col small:px-4 lg:justify-center pb-16 lg:pb-20 lg:pt-32">
      <h2 className="uppercase text-gray-700 text-2xl">top songs</h2>
      <SongList />
    </div>
  );
}

export default TopSongs