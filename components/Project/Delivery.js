import React from 'react';

const Delivery = ({ delivery, mobileImage, finalImage }) => {
  return (
    <section id='delivery' className='mb-12'>
      <div className='flex-col mb-4 mt-0 lg:my-8'>
        <div className='flex items-end justify-around container lg:px-0 px-6 pt-8'>
          <div className='flex-col flex w-full md:w-5/12 mr-4 mb-0 lg:my-4'>
            <div className='font-bold text-sm uppercase tracking-widest text-white mb-4 lg:mb-8'>
              03/03 Development
            </div>
            <div className='w-full'>
              <h3 className='text-xl font-extrabold mb-2'>Product Delivery</h3>
              <p className='font-xl mb-8'>{delivery}</p>
            </div>
          </div>
          <div className='flex md:flex-row flex-col justify-around flex-grow'>
            {mobileImage.map(image => (
              <div className='ml-2 mt-4' key={Math.random()}>
                <img src={`${image}`} alt='placehold' className='shadow-xl' />
              </div>
            ))}
          </div>
        </div>
        <div className='lg:my-12 mt-8 lg:pt-4 justify-center flex'>
          <img src={`${finalImage}`} alt='placehold' className='shadow-xl' />
        </div>
      </div>
    </section>
  );
};

export default Delivery;
