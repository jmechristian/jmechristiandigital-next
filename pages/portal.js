import React from 'react';
import Header from '../components/_App/Header';
import Login from '../components/Portal/Login';

const portal = () => {
  return (
    <>
      <Header />
      <div className='lg:mt-16'>
        <Login />
      </div>
    </>
  );
};

export default portal;
