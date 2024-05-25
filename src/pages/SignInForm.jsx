import React, { useState } from 'react';
import Button  from "../components/Button";
import HeroImage from "../assets/hero.png";

function SignInForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    city: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center" 
         style={{ backgroundImage: `url(${HeroImage})`}}>
      <div className="max-w-md w-full bg-white px-6 py-8 rounded shadow-md">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Sign In</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value]) => (
            <div className="mb-4" key={key}>
              <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</label>
              <input
                type={key === 'email' ? 'email' : key === 'password' ? 'password' : 'text'}
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}
          <Button text="Sign In" />
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
