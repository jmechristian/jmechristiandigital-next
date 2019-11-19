import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className='flex flex-col lg:flex-row container lg:justify-between p-8 lg:px-0'>
      <div className='flex flex-col mb-12 lg:w-4/12'>
        <div className='font-black text-5xl md:text-6xl text-black-800 leading-tight mb-6'>
          Your client portal.
        </div>
        <div className='text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
          maximus eros, et euismod tortor.
        </div>
      </div>
      <div className='lg:w-6/12'>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
