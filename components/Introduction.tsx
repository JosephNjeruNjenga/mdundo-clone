import SongList from "./SongList";
import { djMixes } from "./data";

const Introduction = () => {
  return (
    <div className="intro lg:flex flex-col px-3 small:px-4 font-body lg:items-center pt-16 pb-16 lg:pb-20 lg:pt-32">
        <SongList display={false} data={djMixes} />
    </div>
  );
};

export default Introduction;