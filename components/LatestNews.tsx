import React from 'react'
import NewsRow from './NewsRow';
import { news } from './data';

const LatestNews = () => {
  return (
    <div className="pt-8 pb-10 lg:flex flex-col lg:items-center w-full font-body bg-body">
        <NewsRow data={news} />
    </div>
  );
}

export default LatestNews