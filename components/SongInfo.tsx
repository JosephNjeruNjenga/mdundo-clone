import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiArrowLongUp } from "react-icons/hi2";

const SongInfo = () => {
  return (
    <div className="pt-10">
      <div className="px-[10px] max-w-[1000px] mx-auto small:px-5">
        <div className="pb-[30px]">
          {/* SONG DETAILS */}
          <div className="flex border-b items-center">
            <div className={`p-[2px] cursor-pointer`}>
              <BsFillPlayCircleFill className="text-orange-500" size={35} />
            </div>
            <div className="flex w-full ml-2 py-[6px] flex-col">
              <span className="text-[26px] hover:underline font-semibold text-[#47413c]">
                Believe Me
              </span>
              <span className="text-sm cursor-pointer font-semibold text-[#828180]">
                Johnny Drille
              </span>
            </div>
            <div className="small:mr-10">
              <span className="text-[#47413c] text-xs small:text-[16px]">
                3:31
              </span>
            </div>
          </div>
          {/* DOWNLOAD & PROMOTE */}
          <div className="pt-[13px]">
            <div className="flex flex-col">
              <div className="flex text-white font-semibold text-sm">
                <div className="cursor-pointer transition duration-300 ease hover:bg-[#1187d8] rounded-[3px] medium:tracking-wider mt-[10px] leading-[14px] mr-5 px-[25px] py-[10px] bg-[#3695d6]">
                  Download
                </div>
                <div className="cursor-pointer transition duration-300 ease hover:bg-[#ff5800] rounded-[3px] flex tracking-wider mt-[10px] leading-[14px] px-[15px] py-[10px] bg-[#ff6a00]">
                  Promote ↑
                </div>
              </div>
              <div className="mt-[5px] text-[#3695d6] text-sm font-semibold">
                <span className="mr-2 hover:underline cursor-pointer">
                  Low size version (1.7 MB)
                </span>
                <span className="hover:underline cursor-pointer">
                  Embed song
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[15px]">
          <div className="py-[15px] mx-auto text-white text-[13px] tracking-wider max-w-[184px] medium:max-w-[204px] font-semibold rounded-[3px] leading-[1em] my-[5px] pl-5 medium:pl-[30px] pr-[30px] bg-[#ff6a00] hover:bg-[#ff5800]">
            Get Latest DJ Mixes
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongInfo;
