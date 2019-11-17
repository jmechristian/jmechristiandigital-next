import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className='bg-primary flex'>
      <div className='container flex-col flex lg:flex-row px-8 py-12 lg:py-16 lg:px-0 lg:justify-between lg:items-center justify-center'>
        <div className='flex-col mt-6 lg:mt-0'>
          <div className='text-secondary font-extrabold text-5xl leading-tight mb-4'>
            Let's Build Something Great.
          </div>
          <div className='text-white text-xl lg:text-3xl md:text-2xl'>
            Tell your company's story and maximize your ROI.
          </div>
        </div>
        <div>
          <div className='my-8'>
            <button className='text-xl lg:text-2xl bg-lowlight hover:bg-secondary text-primary font-semibold hover:text-primary py-2 px-6'>
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
