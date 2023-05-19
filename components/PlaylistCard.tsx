import Image from "next/image";
import { useRouter } from "next/router";
import { HiShare } from "react-icons/hi";

interface PlaylistCardProps {
  display: string;
  title: string;
  subtitle: string;
  image: string;
}
const PlaylistCard: React.FC<PlaylistCardProps> = ({
  display,
  title,
  subtitle,
  image,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col px-5 mb-9 drop-shadow-xl">
      <div className="relative cursor-pointer rounded-t-[3px] overflow-hidden group w-[160px] h-[160px]">
        <img
          onClick={() => router.push("/playlist")}
          className="group-hover:brightness-[.6] w-full h-full object-cover transition duration-200  ease-in-out"
          src={image}
          alt={title}
        />
        <a
          href="#"
          className="absolute hidden transition duration-200 ease-in-out  top-2 text-orange-500 right-2 group-hover:block"
        >
          <HiShare size={25} />
        </a>
      </div>
      <div className="flex flex-col">
        <span
          onClick={() => router.push("/playlist")}
          className="hover:underline cursor-pointer text-sm mt-1 text-[#47413c]"
        >
          {title}
        </span>
        <span className="text-xs text-[#9a9999]">{subtitle} songs</span>
      </div>
    </div>
  );
};

export default PlaylistCard;
