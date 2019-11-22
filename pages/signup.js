import React from 'react';
import SignUpForm from '../components/Portal/SignUpForm';
import Header from '../components/_App/Header';

const signup = () => {
  return (
    <div>
      <Header />
      <div className='container flex justify-center p-12 mb-12'>
        <div className='w-1/2 self-center flex'>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default signup;
