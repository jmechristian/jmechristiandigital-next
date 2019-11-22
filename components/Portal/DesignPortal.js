import React from 'react';
import Card from '../../components/Portal/Card';
import {
  faBezierCurve,
  faBorderStyle,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';

const DesignPortal = () => {
  return (
    <div className='mb-16'>
      <div className='font-bold text-xl uppercase tracking-widest text-gray-600 mb-12 text-center'>
        02/03 Design
      </div>
      <div className='flex flex-wrap px-8 md:px-0 justify-center'>
        <Card
          title='Wireframes'
          icon={faBorderStyle}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Card
          title='Stylesheet'
          icon={faPencilAlt}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Card
          title='Prototypes'
          icon={faBezierCurve}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
      </div>
    </div>
  );
};

export default DesignPortal;
