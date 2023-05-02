import { MdFileDownload } from "react-icons/md";
import { HiShare } from "react-icons/hi";

const Song = () => {
  return (
    <div className="flex relative pt-2 pb-1 justify-between border-b border-b-gray-400 font-body items-center">
      <div className="text-blue-500 hover:bg-white rounded-[3px] cursor-pointer">
        <MdFileDownload size={40} />
      </div>
      <div className="w-full group left-11 capitalize cursor-pointer flex flex-col">
        <span className="text-sm group-hover:underline text-gray-600 font-semibold">
          diamond platnumz baikoko mix defwouehfweh...
        </span>
        <span className="text-xs text-gray-600/70">
          bongo mix 2023 - DJ BEE✔️
        </span>
      </div>
      <span className="small:absolute right-10 text-[#47413c]/80 small:text-base text-sm">12:34</span>
      <div className="hidden small:block hover:bg-white rounded-[3px] transition duration-200 cursor-pointer ease-in-out text-orange-600">
        <HiShare size={25} />
      </div>
    </div>
  );
};

export default Song;
