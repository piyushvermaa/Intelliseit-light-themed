"use client"
import React, { useState } from 'react';
import Image from 'next/image'; 

interface SignupCardProps {
  onLoginClick: () => void; // Define type for onLoginClick prop
}

const SignupCard: React.FC<SignupCardProps> = ({ onLoginClick }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    Username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.firstName || !formData.Username || !formData.confirmPassword || !formData.acceptTerms) {
      setError('Please fill in all fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Here you can handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center gap-10 justify-center bg-black">
      <div className="hidden md:block">
        {/* Use next/image for Signuppage */}
        <Image src="/images/home-testimonial.jpg" alt="Signup Page Image" width={600} height={600} className="" />
      </div>
      <div className="max-w-lg p-8  bg-opacity-30 backdrop-blur-lg rounded-3xl bg-gradient-to-br  from-[#33333389] via-[#204a6897] to-transparent shadow-lg ">
        <div className="flex">
          <form onSubmit={handleSubmit} className="w-full">
            <h1 className="text-[#fafafa] text-4xl mb-5" style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>Signup</h1>
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="text-white">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black"
                      placeholder="Enter your first name"
                    />
                  </label>
                </div>
                <div className="w-1/2">
                  <label htmlFor="Username" className="text-white">
                    <input
                      id="Username"
                      name="Username"
                      type="text"
                      value={formData.Username}
                      onChange={handleChange}
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black"
                      placeholder="Username"
                    />
                  </label>
                </div>
              </div>
              <label htmlFor="email" className="text-white">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black"
                  placeholder="Enter email address"
                />
              </label>
              <label htmlFor="password" className="text-white">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black"
                  placeholder="Enter your password"
                />
              </label>
              <label htmlFor="confirmPassword" className="text-white">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black"
                  placeholder="Confirm your password"
                />
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="w-4 h-4 text-white border-slate-200 focus:bg-indigo-600"
                />
                <label htmlFor="acceptTerms" className="text-[#85ff95] ml-2">
                  I accept the terms and conditions
                </label>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button type="submit" className="w-full py-3 px-2 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">

                <span>Signup</span>
              </button>
              <p className="text-center text-white">------------- or -------------</p>
              <button type='button' className="w-full group text-center py-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 mb-5">
                <Image src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo" width={24} height={24} className="w-6 h-6" />{' '}
                <span className='text-white group-hover:text-green-400'>Login with Google</span>
              </button>
              <p className="text-center text-white">
                Already have an account?{' '}
                <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center" onClick={onLoginClick}>
                  <span>Login </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" onClick={onLoginClick}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;