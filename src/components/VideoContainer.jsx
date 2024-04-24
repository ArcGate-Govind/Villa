import React from 'react';
import BestDeals from './BestDeals';

const VideoContainer = () => {
  return (
    <>
      <div className='w-full relative  flex flex-col justify-center items-center'>
        <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/video-bg.jpg" alt="Video Background" className="w-full" />
        <div className="absolute top-10 text-center w-4/5 md:w-2/5 lg:w-1/4 xl:w-1/5">
          <h2 className='mt-4 text-pink-600 text-xl'>VIDEO VIEW</h2>
          <h1 className='text-4xl mt-10 text-white font-extrabold'>Get Closer View & Different Feeling</h1>
        </div>
        <img className='w-full md:w-[800px] margin-imges rounded-lg' src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/video-frame.jpg" alt="Video Frame" />
      </div>
      <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center m-4 mt-20 gap-10 '>
    <div className='px-4 mt-4 md:mt-0 py-6 flex items-center justify-center gap-2 shadow rounded-md bg-orange-100 relative'>
        <div className='text-orange-500 text-2xl font-bold'>34</div>
        <div className='text-lg text-center'>Building Finished Now</div>
        <div className="animate-ping  inline-flex  opacity-75 text-white bg-orange-500 absolute top-0 right-0 -mt-2 -mr-2 w-6 h-6 rounded-full"></div>
    </div>
    <div className='px-4 mt-4 md:mt-0 py-6 flex items-center justify-center gap-2 shadow rounded-md bg-orange-100 relative'>
        <div className='text-orange-500 text-2xl font-bold'>12</div>
        <div className='text-lg text-center'>Year Experience</div>
        <div className='animate-ping  inline-flex  opacity-75 text-white bg-orange-500 absolute top-0 right-0 -mt-2 -mr-2 w-6 h-6 rounded-full'></div>
    </div>
    <div className='px-4 mt-4 md:mt-0 py-6 flex items-center justify-center gap-2 shadow rounded-md bg-orange-100 relative'>
        <div className='text-orange-500 text-2xl font-bold'>24</div>
        <div className='text-lg text-center'>Awwards Won 2024</div>
        <div className='animate-ping  inline-flex  opacity-75 text-white bg-orange-500 absolute top-0 right-0 -mt-2 -mr-2 w-6 h-6 rounded-full'></div>
    </div>
</div>

      <BestDeals />
    </>
  );
};

export default VideoContainer;
