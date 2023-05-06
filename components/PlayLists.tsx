import React from 'react'
import SongRow from './SongRow'
import { playlists } from './data'

const PlayLists = () => {
  return (
    <div className='pt-9 lg:flex flex-col lg:items-center w-full font-body bg-body'>
        <SongRow display="More Playlists" data={playlists} />
    </div>
  )
}

export default PlayLists