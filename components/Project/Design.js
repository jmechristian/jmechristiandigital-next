import React from 'react';

const Design = ({ callout, designImage }) => {
  return (
    <section id='#proto' className='lg:px-0 px-6'>
      <div className='flex flex-col container'>
        <div className='w-full lg:mt-8 mb-12'>
          <span className='text-3xl lg:text-4xl text-gray-500'>{callout}</span>
        </div>
        <div className='font-bold text-sm uppercase tracking-widest text-gray-600 my-4'>
          02/03 Design
        </div>
        <h3 className='text-xl font-extrabold mb-2'>Wireframes + Prototypes</h3>
        <div className='flex flex-wrap mt-4 mb-4 md:mb-8'>
          {designImage.map(image => (
            <div
              className='w-6/12 lg:w-4/12 mb-4 px-1 lg:px-0'
              key={Math.random()}
            >
              <img src={`${image}`} alt='placehold' className='shadow-xl' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design;
