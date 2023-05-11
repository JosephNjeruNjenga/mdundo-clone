import React from 'react'
import SongList from './SongList';
import { artistSongs } from './data';

const ArtistSongs = () => {
  return (
    <div className="px-[10px] font-body pb-10 pt-10 lg:pt-8 small:px-4 lg:flex lg:justify-center">
        <SongList heading='more songs by johnny drille' data={artistSongs} />
    </div>
  );
}

export default ArtistSongs