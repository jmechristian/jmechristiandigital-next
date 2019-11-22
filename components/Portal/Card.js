import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Card = ({ icon, title, description }) => {
  const [hidden, setHidden] = useState('none');

  return (
    <div className='md:w-1/2 lg:w-1/3 w-full flex px-4'>
      <div
        className=' bg-white shadow-md items-center my-4 p-12 flex-col w-full  border border-white hover:border-secondary hover:shadow-lg relative'
        onClick={() => setHidden('block')}
      >
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 10,
            display: `${hidden}`
          }}
        >
          <FontAwesomeIcon icon={faCheckCircle} color='#0fba9e' size='2x' />
        </div>
        <div className='w-full text-center mb-4'>
          <FontAwesomeIcon icon={icon} size='2x' color='#8594a3' />
        </div>
        <div className='w-full text-center mb-6 font-bold text-lg'>{title}</div>
        <div className='w-full text-center' style={{ color: '#8594a3' }}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
