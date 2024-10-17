
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://103.159.85.246:6001/api/auth/forgotPassword', { username });

      if (response.status === 200) {
        alert(response.data.message); // You can replace this with a toast or a modal
      } else {
        alert(response.data.errors[0].msg);
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Something Went Wrong !');
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 font-sans">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-red-500 md:text-2xl dark:text-white">
              Forgot Password ?
            </h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Username"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white font-bold py-2 px-4 w-full rounded-lg hover:bg-gray-600"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
