import { useState } from "react";
import { MdChevronRight } from "react-icons/md";

interface MoreBtnProps {
  display: string;
}

const MoreBtn: React.FC<MoreBtnProps> = ({display}) => {
  const [name, setName] = useState()
  return (
    <div className="flex justify-end self-end ">
      <div className="flex bg-orange-500 cursor-pointer transition hover:bg-orange-600 group rounded mr-2 small:mr-4 mt-7 py-1 pl-4 pr-2 medium:py-2 medium:pl-5 medium:pr-3 text-white items-center">
        <span className="font-body text-sm">
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
