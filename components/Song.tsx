import { MdFileDownload } from "react-icons/md";
import { HiShare } from "react-icons/hi";

interface SongProps {
  title: string;
  artist: string;
  time: string;
  genre: string;
}
const Song: React.FC<SongProps> = ({title, artist, time, genre}) => {
  return (
    <div className="flex pt-2 pb-1 justify-between border-b border-b-gray-400 font-body items-center">
      <div className="text-blue-500 hover:bg-white rounded-[3px] cursor-pointer">
        <MdFileDownload size={40} />
      </div>
      <div className="w-full pl-2 group capitalize cursor-pointer flex flex-col">
        <span className="text-sm small:tracking-wide group-hover:underline text-gray-600 font-semibold">
          {title}
        </span>
        <span className="text-xs text-gray-600/70">
          {artist}
        </span>
      </div>
      <span className="hidden lg:block hover:underline w-28 text-s text-gray-600/80">#{genre}</span>
      <span className="pl-3 small:px-3 text-[#47413c]/80 small:text-base text-sm">{time}</span>
      <div className="hidden small:block hover:bg-white rounded-[3px] transition duration-200 cursor-pointer ease-in-out text-orange-600">
        <HiShare size={25} />
      </div>
    </div>
  );
};

export default Song;
