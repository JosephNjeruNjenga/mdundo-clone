import Navbar from "@/components/Navbar"
import PlaylistInfo from "@/components/PlaylistInfo";

const playlist = () => {
  return (
    <div className="bg-body font-body">
      <Navbar display={false} />
      <PlaylistInfo />
    </div>
  );
}

export default playlist