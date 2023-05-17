import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import PlaylistInfo from "@/components/PlaylistInfo";
import PlaylistSongs from "@/components/PlaylistSongs";

const playlist = () => {
  return (
    <div className="bg-body font-body">
      <Navbar display={false} />
      <PlaylistInfo />
      <PlaylistSongs />
      <Footer display={false} />
    </div>
  );
}

export default playlist