import AboutArtist from "@/components/AboutArtist";
import ArtistInfo from "@/components/ArtistInfo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const artist = () => {
  return (
    <div className="bg-body font-body">
      <Navbar display={false} />
      <ArtistInfo />
      <AboutArtist />
      <Footer display={false} />
    </div>
  );
};

export default artist;
