import React from 'react';

function SignUp() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-6 italic">Welcome to AquaSmart!</h1>
      <form className="space-y-4">
        <div className="flex justify-center items-center">
          <label htmlFor="playerName" className="font-semibold w-52 text-right">
            Player Name:
          </label>
          <input
            type="text"
            name="playerName"
            id="playerName"
            className="border border-gray-300 p-2 rounded w-60 ml-4"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex justify-center items-center">
          <label htmlFor="email" className="font-semibold w-52 text-right">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 p-2 rounded w-60 ml-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="password" className="font-semibold w-52 text-right">
            Player Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-gray-300 p-2 rounded w-60 ml-4"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="confirmPassword" className="font-semibold w-52 text-right">
            Re-Type Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="border border-gray-300 p-2 rounded w-60 ml-4"
            placeholder="Re-type your password"
          />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="age" className="font-semibold w-52 text-right">
            Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="border border-gray-300 p-2 rounded w-60 ml-4"
            placeholder="Enter your age"
          />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="country" className="font-semibold w-52 text-right">
            Country:
          </label>
          <input
            type="text"
            name="country"
            id="country"
            className="border border-gray-300 p-2 rounded w-60 ml-4"
            placeholder="Enter your country"
          />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="institution" className="font-semibold w-52 text-right">
            Institution:
          </label>
          <input
            type="text"
            name="institution"
            id="institution"
            className="border border-gray-300 p-2 rounded w-60 ml-4"
            placeholder="Enter your institution"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Sign UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
