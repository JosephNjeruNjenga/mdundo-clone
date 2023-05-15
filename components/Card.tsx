import { useRouter } from "next/router";
import { HiShare } from "react-icons/hi";

interface CardProps {
  display: string;
  title?: string;
  subtitle?: string;
  name?: string;
  image: string;
}
const Card: React.FC<CardProps> = ({
  display,
  title,
  subtitle,
  image,
  name,
}) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col px-5 mb-9 ${
        display === "playlists" ? "" : "drop-shadow-xl"
      }`}
    >
      <div className="relative cursor-pointer rounded-t-[3px] overflow-hidden group w-[160px] h-[160px]">
        <img
          onClick={() => router.push("/playlist")}
          className="group-hover:brightness-[.6] w-full h-full object-cover transition duration-200  ease-in-out"
          src={image}
          alt={`${display === "playlists" ? title : name}`}
        />
        <a
          href="#"
          className={`absolute hidden transition duration-200 ease-in-out  top-2 text-orange-500 right-2 ${
            display === "playlists" ? "group-hover:block" : ""
          }`}
        >
          <HiShare size={25} />
        </a>
      </div>
      {display === "playlists" && (
        <div className="flex flex-col">
          <span
            onClick={() => router.push("/playlist")}
            className="hover:underline cursor-pointer text-sm mt-1 text-[#47413c]"
          >
            {title}
          </span>
          <span className="text-xs text-[#9a9999]">{subtitle} songs</span>
        </div>
      )}
      {display !== "playlists" && (
        <div className="bg-white hover:underline cursor-pointer rounded-b-[3px] text-sm font-semibold px-[10px] py-[7px] text-[#47413c]">
          {name}
        </div>
      )}
    </div>
  );
};

export default Card;
