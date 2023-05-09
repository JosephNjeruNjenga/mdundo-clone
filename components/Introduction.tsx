import SongList from "./SongList";
import { djMixes } from "./data";

const Introduction = () => {
  return (
    <div className="intro lg:flex px-3 small:px-4 font-body lg:justify-center pt-6 pb-16 lg:pb-20 lg:pt-24">
      <SongList display="More DJ Mixes" data={djMixes} />
    </div>
  );
};

export default Introduction;