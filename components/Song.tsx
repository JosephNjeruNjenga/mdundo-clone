import { MdFileDownload } from "react-icons/md";
import { HiShare } from "react-icons/hi";
import { BsFillPlayCircleFill } from "react-icons/bs";

interface SongProps {
  title: string;
  artist: string;
  time: string;
  genre: string;
}
const Song: React.FC<SongProps> = ({title, artist, time, genre}) => {
  return (
    <div className="flex pt-2 pb-1 justify-between border-b border-b-gray-400/50 items-center">
      <div className="text-blue-500/90 hover:bg-white hover:shadow-lg rounded-[3px] cursor-pointer">
        <MdFileDownload size={40} />
      </div>
      <div className={`px-1 cursor-pointer ${genre === 'DJ Mixes' ? 'hidden' : ''}`}>
        <BsFillPlayCircleFill
          className="text-orange-500"
          size={35}
        />
      </div>
      <div className="w-full pl-2 group capitalize cursor-pointer flex flex-col">
        <span className="text-sm small:tracking-wide group-hover:underline text-gray-600 font-semibold">
          {title}
        </span>
        <span className="text-xs text-gray-600/70">{artist}</span>
      </div>
      <span className="hidden w-full lg:block hover:underline max-w-[90px] text-s text-gray-600/80">
        #{genre}
      </span>
      <span className="pl-3 small:px-3 text-[#47413c]/80 small:text-base text-sm">
        {time}
      </span>
      <a href='#' className="hidden small:block hover:bg-white hover:shadow-lg rounded-[3px] transition duration-200 cursor-pointer ease-in-out text-orange-500">
        <HiShare size={25} />
      </a>
    </div>
  );
};

export default Song;
