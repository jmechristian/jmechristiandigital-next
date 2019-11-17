import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faChevronRight,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

const FooterMenu = () => {
  return (
    <div className='flex flex-col px-8 py-12 bg-lowlight '>
      <div className='flex flex-col lg:flex-row container lg:justify-between'>
        <div className='flex flex-col mt-4 lg:mt-0'>
          <div className='my-2'>
            <img
              src='\images\logo_digital-REV.png'
              alt='logo white'
              width='100'
            />
          </div>
          <div className='font-extrabold uppercase flex flex-col'>
            <span>Wordpress.</span>
            <span>React.</span>
            <span>Mobile App Development.</span>
          </div>
        </div>
        <div className='flex flex-col my-8 lg:mt-0'>
          <div className='text-white font-bold text-2xl mb-1'>Menu</div>
          <div className='mb-1'>
            <FontAwesomeIcon
              icon={faChevronRight}
              color='white'
              className='mr-2'
              size='lg'
            />
            <Link href='/portal'>
              <a>Client Portal</a>
            </Link>
          </div>
          <div className='mb-1'>
            <FontAwesomeIcon
              icon={faChevronRight}
              color='white'
              className='mr-2'
              size='lg'
            />
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </div>
          <div className='mb-1'>
            <FontAwesomeIcon
              icon={faChevronRight}
              color='white'
              className='mr-2'
              size='lg'
            />
            <Link href='/contact'>
              <a>Let's Build</a>
            </Link>
          </div>
        </div>
        <div className='flex flex-col text-primary'>
          <div className='text-white font-bold text-2xl mb-1'>Contact</div>
          <div className='flex mb-1'>
            <FontAwesomeIcon
              icon={faEnvelope}
              color='white'
              className='mr-2'
              size='lg'
            />
            Jamie@JMEChristianDigital.com
          </div>
          <div className='flex'>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              color='white'
              className='mr-3 inline-block'
              size='lg'
            />
            5817 Post Corners Trail
            <br /> Centreville, Virginia, 20120
          </div>
        </div>
      </div>
      <div className='mt-16 text-white text-sm text-center'>
        &copy; 2019 JMEChristianDigital
      </div>
    </div>
  );
};

export default FooterMenu;
