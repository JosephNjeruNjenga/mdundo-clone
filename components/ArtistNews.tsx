import React from 'react'
import NewsRow from './NewsRow';
import { artistNews } from './data';

const ArtistNews = () => {
  return (
    <div className="pt-8 pb-10 lg:flex lg:justify-center font-body bg-body">
      <NewsRow heading='news' data={artistNews} />
    </div>
  );
}

export default ArtistNews