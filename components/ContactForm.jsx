'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mvonnygv',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className='max-w-prose w-full'>
      <form onSubmit={handleOnSubmit} className='flex flex-col p-2 md:text-lg'>
        <label htmlFor='name' className='pt-4 pb-1'>Name</label>
        <input
          id='name'
          type='text'
          name='name'
          onChange={handleOnChange}
          required
          value={inputs.name}
          className='text-dark-grey px-1'
        />
        <label htmlFor="email" className='pt-4 pb-1'>Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          className='text-dark-grey px-1'
        />
        <label htmlFor="message" className='pt-4 pb-1'>Message</label>
        <textarea
          rows="6"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          className='text-dark-grey px-1'
        />
        <button type="submit" disabled={status.submitting} className='px-2 py-1 mt-4 mb-2 bg-cream text-burgundy hover:text-cream hover:bg-burgundy hover:border hover:border-cream max-w-max rounded-sm text-lg md:text-xl'>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error text-lg md:text-xl mb-12">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p className='text-lg md:text-xl mb-12'>{status.info.msg}</p>}
    </div>
  );
};