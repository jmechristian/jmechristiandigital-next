import React from 'react';

const HeroLeft = () => {
  return (
    <div className='w-full lg:w-1/2 absolute h-screen float-left bg-img-left'>
      <div
        className='absolute logo-middle hidden lg:block'
        style={{ zIndex: '15' }}
      >
        <img
          src='/images/logo_digital-REV-475.png'
          alt='JMEChristian Digital'
          width='400'
        />
      </div>
      <div
        className='absolute logo-middle flex flex-col text-center lg:hidden md:w-3/4'
        style={{ zIndex: '15' }}
      >
        <span className='text-6xl md:text-headline text-white font-extrabold leading-none mb-2 md:mb-8'>
          Tell Your Company's Story.
        </span>
        <span className='text-xl text-white md:text-2xl'>
          We work with you to develop process-driven digital solutions to help
          maximixe your ROI.
        </span>
      </div>
      <div
        className='bg-gradient w-full h-screen absolute'
        style={{ zIndex: '10' }}
      ></div>
      <div className='hero-services'>
        <span className='uppercase text-white font-bold tracking-wide text-lg'>
          Wordpress. React. Mobile App Development.
        </span>
      </div>
    </div>
  );
};

export default HeroLeft;
