import React from 'react';

const HeroRight = () => {
  return (
    <div className='w-1/2 float-right static bg-white h-screen'>
      <div className='w-full h-screen'>
        <div
          className='flex flex-col justify-center items-center'
          style={{ height: '100%' }}
        >
          <span className='headline-text font-extrabold w-7/12 mb-6'>
            Tell Your Company's Story.
          </span>
          <span className='text-2xl w-7/12'>
            We develop process-driven digital solutions to help maximize your
            ROI.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
