import { AiFillLike } from "react-icons/ai";

const Facebook = () => {
  return (
    <div className="cursor-pointer select-none bg-blue-600 max-w-[100px] mb-4 px-1 mr-[10px] small:mr-0 justify-evenly py-[1px] rounded-[3px] text-white flex items-center">
        <AiFillLike className="" size={16} />
        <span className="font-bold text-xs px-1">Like</span>
        <span className="text-[11px] pr-1">241K</span>
    </div>
  );
};

export default Facebook;
