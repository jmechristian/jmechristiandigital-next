import React from 'react';

const Research = ({ projectTitle, problem, solution, featureImage }) => {
  return (
    <section id='#research' className='lg:px-0 px-6'>
      <div className='flex-col lg:flex-row flex container my-16 justify-between'>
        <div className='flex-col lg:w-4/12 mr-8'>
          <h1 className='font-extrabold text-5xl mb-8'>{projectTitle}</h1>

          <div className='font-bold text-sm uppercase tracking-widest text-gray-600 mb-4'>
            01/03 Research
          </div>
          <h3 className='text-xl font-extrabold mb-2'>Problem</h3>
          <p className='font-xl mb-8'>{problem}</p>
          <h3 className='text-xl font-extrabold mb-2'>Solution</h3>
          <p>{solution}</p>
        </div>
        <div className='lg:ml-8  mt-8 lg:mt-4'>
          <img src={`${featureImage}`} alt='placehold' className='shadow-xl' />
        </div>
      </div>
    </section>
  );
};

export default Research;
