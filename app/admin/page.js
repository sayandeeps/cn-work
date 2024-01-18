// Login.js
'use client'
import React, { useState } from 'react';
import Admin from './Admin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if the username and password match your criteria (e.g., admin/admin)
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  if (loggedIn) {
    // Redirect to the Admin component on successful login
    return <Admin />;
  }

  return (
    <>
  


    <section class=" font-poppins">
        <div class="max-w-6xl px-0 mx-auto lg:px-6">
            <div class="flex flex-col items-center h-full md:flex-row">
                <div
                    class="flex items-center justify-center h-screen max-w-full px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:px-16 xl:px-12">
                    <div class="z-10 w-full p-10 bg-gray-100 dark:bg-gray-900 h-100">
                        <h2 class="text-xl font-bold leading-tight mb-7 md:text-3xl dark:text-gray-300">
                            Login to your account</h2>
                        <form action="" class="mt-6">
                            <div>
                                <label for="" class="block text-gray-700 dark:text-gray-300">Email:</label>
                                <input type="text"
                                    class="w-full px-4 py-3 mt-2 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                                    value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Username"/>
                            </div>
                            <div class="mt-5">
                                <div>
                                    <label for="" class="text-gray-700 dark:text-gray-300 ">Password:</label>
                                    <div class="relative flex items-center mt-2">
                                        <input type="password"
                                            class="w-full px-4 py-3 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:border dark:border-gray-800 "
                                            value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                class="w-full px-4 py-3 mt-6 font-semibold text-gray-200 bg-blue-600 rounded-lg hover:text-gray-700 hover:bg-blue-200 "
                                type="button" onClick={handleLogin}>LOGIN</button>
                            <p class="mt-6 text-gray-700 dark:text-gray-300"> Are you an user?
                                <a href="/logindev" class="font-semibold text-blue-500 hover:text-blue-700"> Click here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


</>
  );
};

export default Login;
