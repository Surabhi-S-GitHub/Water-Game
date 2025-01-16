
import React from 'react'
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="p-6 text-center">
      <h1 className='text-4xl font-bold mb-6 text-green-600 italic'>Welcome Back to AquaSmart!</h1>
      <form className="space-y-4">
        <div className="flex justify-center items-center">
          <label htmlFor="email" className="font-semibold w-52 text-right">Enter your Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 p-2 rounded w-60 ml-4"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex justify-center items-center">
          <label htmlFor="password" className="font-semibold w-52 text-right">Enter your Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-gray-300 p-2 rounded w-60 ml-4"
            placeholder="Enter your password"
          />
        </div>
        <div className='flex justify-center items-center'>
            <p>New to AquaSmart?</p>
            <Link to="/SignUp" className='text-blue-500 px-2'>Register</Link>
          </div>


        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>

      </form>

    </div>
  )
}

export default SignIn
