import ArtistNews from '@/components/ArtistNews';
import ArtistSongs from '@/components/ArtistSongs';
import DiscoverArtists from '@/components/DiscoverArtists';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Outro from '@/components/Outro';
import SongInfo from '@/components/SongInfo'

const song = () => {
  return (
    <div className="bg-body font-body">
      <Navbar display={false} />
      <SongInfo />
      <hr className="border-gray-300" />
      <Featured />
      <hr className="border-gray-300" />
      <DiscoverArtists />
      <hr className="border-gray-300" />
      <ArtistSongs />
      <hr className="border-gray-300" />
      <ArtistNews />
      <Outro />
      <hr className="border-gray-300" />
      <Footer display={false} />
    </div>
  );
}

export default song