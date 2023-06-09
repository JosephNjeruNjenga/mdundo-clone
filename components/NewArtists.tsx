import React from 'react'
import SongRow from './SongRow';
import { newArtists } from './data';

const NewArtists = () => {
  return (
    <div className="pt-9 lg:flex lg:justify-center font-body bg-body">
      <SongRow heading="new artists" display="All Artists" data={newArtists} />
    </div>
  );
}

export default NewArtists