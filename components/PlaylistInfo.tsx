import { useState } from "react";
import Facebook from "./Facebook";

const PlaylistInfo = () => {
  const [showArtists, setShowArtists] = useState(false);
  return (
    <div className="pt-10 lg:pt-[115px]">
      <div className="px-[10px] max-w-[1000px] mx-auto small:px-5">
        <div className="border-b lg:relative border-[#828282] pb-[25px] mb-[5px]">
          <div className="flex lg:h-[160px]">
            <div className="w-[90px] min-w-[90px] lg:w-[142px] lg:min-w-[142px] my-auto rounded-[3px] overflow-hidden">
              <img
                src="https://mdundo.com/media/playlist/39446_LzbTNJMX_t.jpg"
                alt="Hot Party Mixes"
              />
            </div>
            <div className="flex flex-col w-full px-[10px] lg:px-5">
              <h2 className="text-[22px] lg:text-2xl pb-[3px] lg:pb-[5px] text-[#47413c] font-semibold">
                Hot Party Mixes playlist
              </h2>
              <div className="flex flex-col lg:flex-row lg:justify-between border-t">
                <div className="mt-[3px] text-[#47413c] text-[13px] font-semibold">
                  118 songs featuring Mavin All Stars, Rema, Chiké
                </div>
                <div className="flex pl-[5px] gap-3 pt-[3px] lg:pt-[5px] pb-[2px]">
                  <Facebook icon text="Like" count="55" />
                  <Facebook text="Share" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-[5px] lg:absolute left-[162px] top-[58px]">
            <div className="text-[13px] text-[#47413c] lg:max-w-[440px]">
              Rema, Joeboy, Davido, Reekado Banks, sKIIBIINew mixes,{" "}
              <span className={`${showArtists ? "" : "hidden"}`}>
                latest mixes, dj mixes, naija dj mixes, latest dj mixes, top
                naija mixes, 2022 dj&apos;s 2022 dj mixes,Bella Shmurda, rema, chike,
                Reekado Banks, Fave, Zoro, Phyno,{" "}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistInfo;
