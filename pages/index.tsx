import Facebook from "@/components/Facebook";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import PlayLists from "@/components/PlayLists";
import TopSongs from "@/components/TopSongs";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Facebook />
      <Introduction />
      <hr className="border-gray-300" />
      <TopSongs />
      <hr className="border-gray-300" />
      <PlayLists />
    </div>
  );
}
