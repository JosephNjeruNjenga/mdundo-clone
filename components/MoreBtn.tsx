import { MdChevronRight } from "react-icons/md";

interface MoreBtnProps {
  display: string;
}

const MoreBtn: React.FC<MoreBtnProps> = ({display}) => {
  return (
    <div className="flex">
      <div className="flex select-none bg-[#ff6a00] cursor-pointer transition duration-300 ease hover:bg-[#ff5800] group rounded py-1 pl-4 pr-2 medium:py-2 medium:pl-5 medium:pr-3 text-white items-center">
        <span className="font-body font-semibold text-[13px] medium:text-[14px]">
          {display}
        </span>
        <MdChevronRight
          className="group-hover:translate-x-2 medium:group-hover:translate-x-3 transition duration-300 ease"
          size={30}
        />
      </div>
    </div>
  );
};

export default MoreBtn;
