import React from "react";

const Outro = () => {
  return (
    <div className="pt-10 pb-4 lg:pt-[50px] lg:pb-5 bg-white font-body">
      <div className="px-[10px] small:px-5  leading-[14px]">
        <div className="text-[#47413c] max-w-[700px] mx-auto text-sm font-semibold">
          <p className="mb-8">
            Download music from your favorite artists{" "}
            <span className="font-bold">for free</span> with Mdundo. Mdundo
            started in collaboration with some of Africa's{" "}
            <span className="font-bold">best artists</span>. By downloading
            music from Mdundo YOU become a part of supporting African artists!!!
            Mdundo is financially backed by 88mph - in partnership with Google
            for entrepreneurs.
          </p>
          <p className="mb-8">
            Mdundo is kicking music into the stratosphere by{" "}
            <span className="font-bold">taking the side of the artist.</span>{" "}
            Other mobile music services keep{" "}
            <span className="font-bold">85-90%</span> of sales. What?!, Yes, the
            majority of the cash lands in the pockets of big telcos. Mdundo
            enables you to keep track of your fans and we split any revenue
            generated from the site fairly with the artists.
          </p>
        </div>
        <div className="px-5 select-none cursor-pointer py-[15px] mx-auto medium:w-[355px] bg-[#3695d6] hover:bg-[#1187d8] transition duration-300 ease text-white text-sm text-center rounded-[3px]">
          I am a musician! - Log in or Sign up
        </div>
      </div>
    </div>
  );
};

export default Outro;
