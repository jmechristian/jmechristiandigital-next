import React from 'react';
import Research from '../components/Project/Research';
import Design from '../components/Project/Design';
import Colors from '../components/Project/Colors';
import Delivery from '../components/Project/Delivery';

const Project = () => {
  return (
    <div className='flex-col justify-center'>
      <Research />
      <Design />
      <Colors />
      <Delivery />
    </div>
  );
};

export default Project;
