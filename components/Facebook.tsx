import { AiFillLike } from "react-icons/ai";

const Facebook = () => {
  return (
    <div className="absolute cursor-pointer top-26 right-0 lg:top-16 lg:right-[10%] x:right-[17%] xl:right-[23%] 2xl:right-[27%] mt-5 p-1 mx-4 bg-blue-600 rounded-[3px] flex items-center">
      <div className="flex items-center text-white">
        <AiFillLike className="" size={16} />
        <span className="font-bold text-xs px-1">Like</span>
        <span className="font-normal text-xs pr-1">241K</span>
      </div>
    </div>
  );
};

export default Facebook;
