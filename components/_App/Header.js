import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ModalMenu from '../_App/ModalMenu';

const HeroHeader = () => {
  const [open, openModal] = useState(false);

  const closeModal = childData => openModal(childData);

  return (
    <>
      {open && <ModalMenu closeModal={closeModal} />}
      <nav className='flex items-center justify-between flex-wrap bg-transparent py-6 w-full mt-4 container'>
        <div>
          <Link href='/'>
            <a>
              <img src='/images/logo_digital.png' alt='main logo' />
            </a>
          </Link>
        </div>
        <div className='flex items-center'>
          <div>
            <button onClick={() => openModal(true)}>
              <FontAwesomeIcon icon={faBars} size='2x' color='black' />
            </button>
          </div>
          <div className='ml-10 hidden md:block'>
            <button className='bg-secondary hover:bg-lowlight hover:text-primary text-white text-lg font-bold py-4 px-12 rounded'>
              <Link href='/contact'>
                <a>Let's Build</a>
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeroHeader;
