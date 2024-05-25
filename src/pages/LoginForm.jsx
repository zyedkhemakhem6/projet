import React, { useState } from 'react';
import Button from "../components/Button";
import HeroImage from "../assets/hero.png";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Email:', email);
    console.log('Submitted Password:', password);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center" 
         style={{ backgroundImage: `url(${HeroImage})` }}>
      <nav/>
      <div className="max-w-md w-full bg-white px-6 py-8 rounded shadow-md">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <Button text="Login" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
