import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { handleLogin } from '../../utils/auth';
import { PulseLoader } from 'react-spinners';

const INITIAL_USER = {
  name: '',
  email: '',
  password: ''
};

const SignUpForm = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const [loading, setLoading] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setLoading(true);
      const payload = { ...user };
      const response = await axios.post(
        'http://localhost:3000/api/signup',
        payload
      );
      handleLogin(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3 mb-2 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            Name
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-first-name'
            type='text'
            name='name'
            placeholder='Name'
            value={user.name}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className='w-full px-3 mb-2 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            Email
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-email'
            type='email'
            name='email'
            placeholder='Email'
            value={user.email}
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3 mb-2 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            Password
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4'
            name='password'
            type='password'
            placeholder='Password'
            value={user.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='flex items-center'>
        <button className='bg-primary hover:bg-lowlight text-white hover:text-primary py-2 px-4 mr-4'>
          Sign Up User
        </button>
        <PulseLoader
          loading={loading}
          color={'#0fba9e'}
          size={15}
          sizeUnit={'px'}
          margin={'2px'}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
