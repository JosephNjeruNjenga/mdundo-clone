import React from 'react'
import Song from './Song';

const HomeContent = () => {
  return (
    <div className="intro lg:flex lg:justify-center lg:pt-20">
      <div className="lg:max-w-[1000px] px-2">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
      </div>
    </div>
  );
}

export default HomeContent