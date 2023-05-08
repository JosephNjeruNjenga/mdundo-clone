import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-body">
      {/* TOP */}
      <div className="py-5">
        <div className="px-[10px] small:px-5 max-w-[1000px] mx-auto flex flex-col">
          {/* NAV */}
          <div className="text-sm max-w-[135px] text-[#47413c] flex font-body font-semibold flex-col">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="hover:underline cursor-pointer mt-[3px]">
              News
            </span>
            <span className="hover:underline cursor-pointer mt-[3px]">
              Join as an artist
            </span>
            <span className="hover:underline cursor-pointer mt-[3px]">
              For investors
            </span>
            <span className="hover:underline cursor-pointer mt-[3px]">
              About us
            </span>
          </div>
          {/* SOCIALS */}
          <div className="mt-8 flex max-w-[135px] justify-between">
            <div className="text-white transition duration-200 ease cursor-pointer hover:opacity-70 rounded-full flex justify-center items-center h-9 w-9 bg-[#5114c9]">
              <FaFacebookF size={20} />
            </div>
            <div className="text-white transition duration-200 ease cursor-pointer hover:opacity-70 rounded-full flex justify-center items-center h-9 w-9 bg-blue-400">
              <FaTwitter size={20} />
            </div>
            <div className="text-white transition duration-200 ease cursor-pointer hover:opacity-70 rounded-full flex justify-center items-center h-9 w-9 bg-gradient-to-r from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5]">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="bg-background leading-5 pt-[10px] text-[11px] text-[#9a9999] pb-[13px] mb-[14px]">
        <div className="px-[10px] small:px-5 max-w-[1000px] mx-auto lg:flex justify-between">
          <p>© 2022 Mdundo. All rights reserved.</p>
          <p>
            <span className="cursor-pointer pb-[3px] border-b border-[#9a9999]/40 hover:border-[#9a9999]">
              Terms of use
            </span>
            <span className="ml-5 cursor-pointer pb-[3px] border-b border-[#9a9999]/40 hover:border-[#9a9999]">
              Privacy policy
            </span>
          </p>
        </div>
        <div className="px-[10px] small:px-5 max-w-[1000px] mx-auto">
          <p>
            This product includes GeoLite2 data created by MaxMind, available
            from <span className="cursor-pointer">https://www.maxmind.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// [#4e78c8]