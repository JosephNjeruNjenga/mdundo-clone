import { HiShare } from "react-icons/hi";

const Card = () => {
  return (
    <div className="flex flex-col px-5 mb-9">
      <div className="relative cursor-pointer rounded-[3px] overflow-hidden group hover:opacity-70 transition duration-100 ease-in-out w-[160px] h-[160px]">
        <img
          src="https://mdundo.com/media/playlist/39446_LzbTNJMX_t.jpg"
          alt=""
        />
        <div className="absolute hidden transition duration-1000 ease-in-out group-hover:block top-2 text-orange-500 right-2">
          <HiShare size={25} />
        </div>
      </div>
      <span className="text-sm mt-1 text-[#47413c]">Hot Party Mixes</span>
      <span className="text-xs text-[#9a9999]">118 songs</span>
    </div>
  );
}

export default Card