import SongList from './SongList';
import MoreBtn from './MoreBtn';

const Introduction = () => {
  return (
    <div className="intro lg:flex lg:justify-center pt-16 lg:pt-32">
      <div className=''>
        <SongList />
        <MoreBtn />
      </div>
    </div>
  );
}

export default Introduction