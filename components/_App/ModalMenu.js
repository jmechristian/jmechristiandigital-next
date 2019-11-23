import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ModalMenu = props => {
  return (
    <div
      className='flex flex-col bg-gradient-menu w-screen h-screen justify-center absolute p-8 container lg:w-1/2 lg:p-16'
      style={{ zIndex: '45' }}
    >
      <div className='mb-4'>
        <button className='relative' onClick={() => props.closeModal(false)}>
          <FontAwesomeIcon icon={faTimes} size='3x' color='#ed4010' />
        </button>
      </div>
      <div className='text-white font-bold text-6xl flex w-full leading-tight mb-6'>
        <Link href='/portalhome'>
          <a>Client Portal</a>
        </Link>
      </div>
      <div className='text-white font-bold text-6xl leading-tight mb-6'>
        <Link href='/project'>
          <a>Projects</a>
        </Link>
      </div>
      <div className='text-white font-bold text-6xl mb-4 leading-tight '>
        <Link href='/contact'>
          <a>Let's Build</a>
        </Link>
      </div>
    </div>
  );
};

export default ModalMenu;
