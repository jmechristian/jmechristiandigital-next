import React from 'react';

const Stage = ({ title, bgColor, mainColor, stage }) => {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8 text-center'>
      <div
        className='border border-b-0 rounded-t px-4 py-8 text-gray-700 font-bold text-xl shadow'
        style={{ borderColor: `${mainColor}`, backgroundColor: `${bgColor}` }}
      >
        <p>{stage}</p>
      </div>
      <div
        className=' text-white font-bold rounded-b px-4 py-2'
        style={{ backgroundColor: `${mainColor}` }}
      >
        {title}
      </div>
    </div>
  );
};

export default Stage;
