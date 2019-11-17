import React from 'react';
import Research from '../components/Project/Research';
import Design from '../components/Project/Design';
import Colors from '../components/Project/Colors';
import Delivery from '../components/Project/Delivery';
import Header from '../components/_App/Header';

const Project = () => {
  return (
    <>
      <Header />
      <div className='flex-col justify-center mt-4'>
        <Research />
        <Design />
        <Colors />
        <Delivery />
      </div>
    </>
  );
};

export default Project;
