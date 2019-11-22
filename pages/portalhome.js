import React from 'react';
import Header from '../components/_App/Header';
import ResearchPortal from '../components/Portal/ResearchPortal';
import DesignPortal from '../components/Portal/DesignPortal';
import DeliveryPortal from '../components/Portal/DeliveryPortal';
import Stage from '../components/Portal/Stage';

const PortalHome = () => {
  return (
    <>
      <Header />
      <div className='container mt-8 lg:mt-12 lg:py-12 md:px-4 flex flex-wrap justify-center'>
        <div className='font-extrabold text-3xl my-8 text-center w-full'>
          Project Status
        </div>
        <Stage
          stage='Research'
          mainColor='#090E24'
          bgColor='#ffffff'
          title='Current Phase'
        />
        <Stage
          stage='Design'
          mainColor='#ed4010'
          bgColor='#ffffff'
          title='Next Phase'
        />
        <Stage
          stage='Dec. 11, 2019'
          mainColor='#0da2db'
          bgColor='#ffffff'
          title='Est. Completion Date'
        />
      </div>
      <div className='bg-gray-200 mt-8'>
        <div className='container mt-8 lg:mt-12 py-12 md:px-4'>
          <ResearchPortal />
          <DesignPortal />
          <DeliveryPortal />
        </div>
      </div>
    </>
  );
};

export default PortalHome;
