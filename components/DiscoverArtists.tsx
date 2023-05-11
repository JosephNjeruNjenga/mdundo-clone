import React from 'react'
import SongRow from './SongRow';
import { topArtists } from './data';

const DiscoverArtists = () => {
  return (
    <div className="pt-9 mb-14 lg:flex lg:justify-center font-body">
        <SongRow display='More artists' heading='discover more artists' data={topArtists} />
    </div>
  );
}

export default DiscoverArtists