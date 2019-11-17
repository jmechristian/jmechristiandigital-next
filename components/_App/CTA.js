import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className='bg-primary flex'>
      <div className='container flex-col flex lg:flex-row px-8 py-12 lg:py-16 lg:px-0 lg:justify-between lg:items-center justify-center'>
        <div className='flex-col mt-6 lg:mt-0'>
          <div className='text-lowlight font-extrabold text-5xl leading-tight mb-4'>
            Let's Build Something Great.
          </div>
          <div className='text-white text-xl md:text-2xl'>
            Tell your company's story and maximize your ROI.
          </div>
        </div>
        <div>
          <div className='my-8'>
            <button className='bg-secondary hover:bg-lowlight hover:text-primary text-white text-lg font-bold py-4 px-12 rounded'>
              <Link href='/contact'>
                <a>Start Your Story</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
