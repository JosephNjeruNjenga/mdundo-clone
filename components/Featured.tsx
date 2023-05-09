import React from 'react'
import SongList from './SongList'
import { featured } from './data'

const Featured = () => {
  return (
    <div className="px-[10px] font-body pb-10 pt-10 lg:pt-8 small:px-4 lg:flex lg:justify-center">
      <SongList
        heading="featured in dj mixes"
        display="More mixes"
        data={featured}
      />
    </div>
  );
}

export default Featured