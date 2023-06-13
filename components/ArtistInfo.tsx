import { useState } from "react";
import Facebook from "./Facebook";

const ArtistInfo = () => {
  const [showArtists, setShowArtists] = useState(false);
  return (
    <div className="pt-10 lg:pt-[115px]">
      <div className="px-[10px] max-w-[1000px] mx-auto small:px-5">
        <div className="border-b lg:relative border-[#828282] pb-5 lg:pb-[30px] mb-[5px]">
          <div className="flex lg:h-[160px]">
            <div className="w-[90px] min-w-[90px] lg:w-[142px] lg:min-w-[142px] my-auto rounded-[3px] overflow-hidden">
              <img
                src="https://mdundo.com/media/picture/171070_FHRO8gXTohyeXdpIDCOm8jjPr9PW_s.jpg"
                alt="Hot Party Mixes"
              />
            </div>
            <div className="flex flex-col w-full px-[10px] lg:pl-5 lg:pr-0">
              <h2 className="text-[22px] lg:text-2xl pb-[3px] lg:pb-[5px] text-[#47413c] font-semibold">
                Lucky Dube
              </h2>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:pt-[1px] border-t">
                <div className="mt-[3px] text-[#47413c] text-[13px] font-semibold">
                  414 820 monthly listeners. Rank: 1
                </div>
                <div className="flex pl-[5px] gap-3 pt-[3px] lg:mr-2 lg:pt-[5px] pb-[2px]">
                  <Facebook icon text="Like" count="10K" />
                  <Facebook text="Share" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-[5px] w-full lg:max-w-[798px] lg:absolute left-[162px] top-[58px]">
            <div className="text-[13px] text-[#47413c] lg:max-w-[440px]">
              Lucky Philip Dube was a South African reggae musician and
              Rastafarian. He recorded 22 albums in Zulu, English and{" "}
              <span className={`${showArtists ? "" : "hidden"}`}>
                Afrikaans in a 25-year period and was South Africa&apos;s
                biggest-selling reggae artist.{" "}
              </span>
              <span
                onClick={() => setShowArtists(true)}
                className={`underline text-[#3695d6] cursor-pointer ${
                  showArtists ? "hidden" : ""
                }`}
              >
                (more)
              </span>
            </div>
            <div className="flex text-white font-semibold text-sm">
              <div className="cursor-pointer select-none transition duration-200 ease hover:bg-[#ff5800] rounded-[3px] flex tracking-wider mt-[10px] leading-[14px] px-[15px] py-[10px] bg-[#ff6a00]">
                Promote artist ↑
              </div>
            </div>
            <div className="flex justify-end">
                <a className="text-xs text-[-webkit-link]" href="">report</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
