import React from 'react'
import SongRow from './SongRow';
import { topArtists } from './data';

const TopArtists = () => {
  return (
    <div className="pt-9 lg:flex flex-col lg:items-center w-full font-body bg-body">
      <SongRow heading='top artists' display="More Artists" data={topArtists} />
    </div>
  );
}

export default TopArtists