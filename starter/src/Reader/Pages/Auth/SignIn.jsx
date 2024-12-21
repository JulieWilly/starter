import React from 'react'
import { useNavigate } from 'react-router';

const SignIn = () => {
    const redirectTo = useNavigate();

    // navigate to sign up page
    const toSignUp = () => {
        redirectTo('/sign-up')
    }
  return (
    <div className="flex items-center justify-center p-2 w-full flex-col">
      <div className="w-full">
        <h1 className="text-2xl  text-center pb-2 font-medium">
          Starter Blogs
        </h1>
        <hr />
      </div>
      <div className="mt-8">
        <h2 className=" font-light text-3xl text-center">
          Login to Starter Blogs
        </h2>

        <form className="mt-8 flex-col flex gap-4  ">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light">
              Email address
            </label>
            <input
              className="h-10 focus:border-black border-2 ps-2 "
              type="email"
              name="emailAddress"
              value={"johndoe@gmail.com"}
            />
          </div>
          <p className=" text-end mt-2 underline cursor-pointer ">
            Forgot Password?
          </p>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light">
              Password
            </label>
            <input
              className="h-10 focus:border-black border-2 ps-2 "
              type="password"
              name="emailAddress"
              value={"johdoes"}
            />
          </div>

          <button className="w-full bg-black  text-white p-2 mt-6">
            {" "}
            Login{" "}
          </button>

          <div className='mt-8'>
            <span>Dont have an account? </span>
            <span className=" text-end mt-2 underline cursor-pointer " onClick={toSignUp}>Sign up</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn