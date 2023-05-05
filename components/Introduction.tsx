import SongList from './SongList';
// import { djMixes } from './data';
const Introduction = () => {
  return (
    <div className="intro lg:flex px-3 small:px-4 lg:justify-center pt-16 pb-16 lg:pb-20 lg:pt-32">
      <div className="">
        <SongList display={false}/>
      </div>
    </div>
  );
}

export default Introduction