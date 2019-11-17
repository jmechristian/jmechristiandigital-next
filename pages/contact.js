import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import Header from '../components/_App/Header';

const contact = () => {
  return (
    <>
      <Header />
      <div className='lg:mt-16'>
        <ContactForm />
      </div>
    </>
  );
};

export default contact;
