import React from 'react'
import SongList from './SongList'
import {playlistSongs} from './data'

const PlaylistSongs = () => {
  return (
    <div className='px-[10px] small:px-5 lg:flex justify-center border-b border-[#828282]/30 pb-[50px]'>
        <SongList data={playlistSongs} />
    </div>
  )
}

export default PlaylistSongs