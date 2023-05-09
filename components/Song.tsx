import { MdFileDownload } from "react-icons/md";
import { HiShare } from "react-icons/hi";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";

interface SongProps {
  title: string;
  artist: string;
  time: string;
  genre: string;
}
const Song: React.FC<SongProps> = ({ title, artist, time, genre }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();
  return (
    <div className="flex pt-2 text-[#47413c] pb-1 justify-between border-b border-b-gray-400/50 items-center">
      {/* DOWNLOAD BTN */}
      <div className="text-blue-500 hover:bg-white hover:shadow-lg rounded-[3px] cursor-pointer">
        <MdFileDownload size={40} />
      </div>
      {/* PLAY BTN */}
      <div
        onClick={() => setIsPlaying(!isPlaying)}
        className={`px-1 text-[#ff6a00] transition duration-300 ease hover:text-[#ff5800] cursor-pointer ${
          genre === "DJ Mixes" ? "hidden" : ""
        }`}
      >
        {isPlaying ? (
          <BsFillPauseCircleFill size={35} />
        ) : (
          <BsFillPlayCircleFill size={35} />
        )}
      </div>
      {/* TITLE & ARTIST */}
      <div className="w-full pl-2 group capitalize cursor-pointer flex flex-col">
        {/* TITLE */}
        <span
          onClick={() => router.push("/song")}
          className="text-sm small:tracking-wide group-hover:underline font-semibold"
        >
          {title}
        </span>
        {/* ARTIST */}
        <span className="text-xs">{artist}</span>
      </div>
      {/* GENRE */}
      <span className="hidden w-full cursor-pointer lg:block hover:underline max-w-[90px] text-sm font-semibold">
        #{genre}
      </span>
      {/* TIME */}
      <span className="pl-3 small:px-3 small:text-base text-base">{time}</span>
      {/* SHARE BTN */}
      <a
        href="#"
        className="hidden small:block hover:bg-white hover:shadow-lg rounded-[3px] transition duration-200 cursor-pointer ease-in-out text-[#ff6a00]"
      >
        <HiShare size={25} />
      </a>
    </div>
  );
};

export default Song;
