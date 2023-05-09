import React from 'react'
import SongRow from './SongRow';
import { topArtists } from './data';

const TopArtists = () => {
  return (
    <div className="pt-9 lg:flex lg:justify-center font-body bg-body">
      <SongRow heading='top artists' display="More Artists" data={topArtists} />
    </div>
  );
}

export default TopArtists