import React, { useState } from 'react';
import axios from 'axios';
import { handleLogin } from '../../utils/auth';
import { DotLoader } from 'react-spinners';

const INITIAL_USER = {
  email: '',
  password: ''
};

const LoginForm = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const url = 'http://localhost:3000/api/login';
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3 mb-2 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            Email
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-first-name'
            type='email'
            name='email'
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
      <button className='bg-primary hover:bg-lowlight text-white hover:text-primary py-2 px-4'>
        Let's Get To Work
      </button>
      <DotLoader
        loading={loading}
        color={'#0fba9e'}
        size={150}
        sizeUnit={'px'}
      />
    </form>
  );
};

export default LoginForm;
