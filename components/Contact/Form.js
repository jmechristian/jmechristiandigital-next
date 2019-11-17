import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [shown, setHidden] = useState('');
  const [hide, setShown] = useState('hidden');

  const submitHandler = e => {
    e.preventDefault();

    const templateId = 'template_1NxG5qC5';
    const userId = 'user_BnmyK8NOV9N1ic2mxSm3V';
    const serviceId = 'outlook';
    const emailBody = {
      from_name: name,
      reply_to: email,
      message_html: message
    };

    emailjs
      .send(serviceId, templateId, emailBody, userId)
      .then(response => {
        console.log('Success', response.status, response.text);
        setHidden('hidden');
        setShown('block');
        clearForm();
      })
      .catch(err => {
        console.log('FAILED...', err);
      });
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <div className='flex bg-secondary w-full mt-4'>
        <div
          className={`font-bold text-primary text-3xl lg:text-4xl leading-tight p-12 lg:p-16 ${hide}`}
        >
          Thank you for reaching out. We can't wait to see how we can help tell
          your company's story.
        </div>
      </div>
      <form className={`w-full ${shown}`}>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              Name*
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='grid-first-name'
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
              required={true}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-email'
            >
              Email*
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required={true}
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-textarea'
            >
              What Can We Build With You?*
            </label>
            <textarea
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-textarea'
              rows='5'
              type='text'
              placeholder='Tell us what you would like to accomplish. Make it as long and detailed as you would like.'
              value={message}
              onChange={e => setMessage(e.target.value)}
              required={true}
            />
            <p className='text-gray-600 text-xs italic'>* Required</p>
          </div>
        </div>
        <div className='mt-4'>
          <button
            className='bg-primary hover:bg-lowlight text-white hover:text-primary py-2 px-4'
            onClick={submitHandler}
          >
            Let's Get To Work
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
