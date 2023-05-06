import { HiShare } from "react-icons/hi";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}
const Card: React.FC<CardProps> = ({title, subtitle, image}) => {
  return (
    <div className="flex flex-col px-5 mb-9">
      <div className="relative cursor-pointer rounded-[3px] overflow-hidden group w-[160px] h-[160px]">
        <img
          className="group-hover:brightness-[.6]  transition duration-200  ease-in-out"
          src={image}
          alt=""
        />
        <a
          href="#"
          className="absolute hidden transition duration-200 ease-in-out group-hover:block top-2 text-orange-500 right-2"
        >
          <HiShare size={25} />
        </a>
      </div>
      <span className="hover:underline cursor-pointer text-sm mt-1 text-[#47413c]">{title}</span>
      <span className="text-xs text-[#9a9999]">{subtitle} songs</span>
    </div>
  );
}

export default Card