import DiscoverArtists from '@/components/DiscoverArtists';
import Featured from '@/components/Featured';
import Navbar from '@/components/Navbar'
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
    </div>
  );
}

export default song