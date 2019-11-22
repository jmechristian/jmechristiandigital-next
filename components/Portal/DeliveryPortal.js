import React from 'react';
import Card from '../../components/Portal/Card';
import {
  faFileAlt,
  faFileContract,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

const DeliveryPortal = () => {
  return (
    <div className='mb-16'>
      <div className='font-bold text-xl uppercase tracking-widest text-gray-600 mb-12 text-center'>
        03/03 Delivery
      </div>
      <div className='flex flex-wrap px-8 md:px-0 justify-center'>
        <Card
          title='Contract'
          icon={faFileAlt}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Card
          title='Invoice'
          icon={faFileContract}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Card
          title='Final Deliverables'
          icon={faTrophy}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
      </div>
    </div>
  );
};

export default DeliveryPortal;
