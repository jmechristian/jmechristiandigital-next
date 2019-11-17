import React from 'react';
import Form from './Form';

const ContactForm = () => {
  return (
    <div className='flex flex-col lg:flex-row container lg:justify-between p-8 lg:px-0'>
      <div className='flex flex-col mb-12 lg:w-4/12'>
        <div className='font-black text-5xl md:text-6xl text-black-800 leading-tight mb-6'>
          Tell us about your project.
        </div>
        <div className='text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
          maximus eros, et euismod tortor.
        </div>
      </div>
      <div className='lg:w-6/12'>
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
