import Image from "next/image";
import { useRouter } from "next/router";

interface ArtistCardProps {
  display: string;
  name: string;
  image: string;
}
const ArtistCard: React.FC<ArtistCardProps> = ({ display, image, name }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col px-5 mb-9">
      <div className="cursor-pointer rounded-t-[3px] overflow-hidden group w-[160px] h-[160px]">
        <img
          onClick={() => router.push("/artist")}
          className="group-hover:brightness-[.6] w-full h-full object-cover transition duration-200  ease-in-out"
          src={image}
          alt={name}
        />
      </div>
      <div
        onClick={() => router.push("/artist")}
        className="bg-white hover:underline cursor-pointer rounded-b-[3px] text-sm font-semibold px-[10px] py-[7px] text-[#47413c]"
      >
        {name}
      </div>
    </div>
  );
};

export default ArtistCard;
