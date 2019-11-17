import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='flex pb-8 py-4 md:py-6 items-center container justify-between lg:px-0 px-8'>
      <div className='pt-2'>
        <Link href='/'>
          <a>
            <img src='\images\logo_digital.png' alt='Logo'></img>
          </a>
        </Link>
      </div>
      <div className='flex md:hidden'>
        <button onClick={() => openModal(true)}>
          <FontAwesomeIcon icon={faBars} size='2x' color='black' />
        </button>
      </div>
      <div className='flex hidden md:inline-flex'>
        <div>
          <span className='text-lg font-semibold mx-8'>
            <Link href='/portal'>
              <a>Client Portal</a>
            </Link>
          </span>
        </div>
        <div>
          <span className='text-lg font-semibold mx-8'>
            <Link href='/project'>
              <a>Projects</a>
            </Link>
          </span>
        </div>
        <div>
          <span className='text-lg font-semibold mx-8 border-b-4 border-highlight'>
            <Link href='/contact'>
              <a>Let's Build</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
