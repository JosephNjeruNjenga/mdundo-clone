import Facebook from "@/components/Facebook";
import Introduction from "@/components/Introduction";
import LatestNews from "@/components/LatestNews";
import Navbar from "@/components/Navbar";
import NewArtists from "@/components/NewArtists";
import Outro from "@/components/Outro";
import PlayLists from "@/components/PlayLists";
import TopArtists from "@/components/TopArtists";
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
      <TopArtists />
      <NewArtists />
      <LatestNews />
      <hr className="border-gray-300" />
      <Outro />
      <hr className="border-gray-300" />
    </div>
  );
}
