import React from 'react';

const HeroLeft = () => {
  return (
    <div className='w-1/2 absolute h-screen float-left bg-img-left'>
      <div className='absolute logo-middle' style={{ zIndex: '15' }}>
        <img
          src='/images/logo_digital-REV-475.png'
          alt='JMEChristian Digital'
          width='400'
        />
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
