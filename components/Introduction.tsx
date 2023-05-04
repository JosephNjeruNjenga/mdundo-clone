import SongList from './SongList';
import MoreBtn from './MoreBtn';

const Introduction = () => {
  return (
    <div className="intro lg:flex px-3 small:px-4 lg:justify-center pt-16 pb-16 lg:pb-20 lg:pt-32">
      <div className="">
        <SongList />
        <MoreBtn />
      </div>
    </div>
  );
}

export default Introduction