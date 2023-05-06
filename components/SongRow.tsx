import React from 'react'
import Card from './Card';
import MoreBtn from './MoreBtn';

const SongRow = () => {
  return (
    <div className="lg:w-full lg:max-w-[1000px]">
      <h2 className="text-4xl pl-1 mb-6 text-gray-700">PLAYLISTS</h2>
      <div className="w-full flex flex-nowrap -ml-3 -mr-3 overflow-x-scroll">
        <Card />
        <Card />
        <Card />
      </div>
      <MoreBtn />
    </div>
  );
}

export default SongRow