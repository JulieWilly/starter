import React from 'react'
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-3 bg-[#222222] p-8 grid-rows-2 gap-2 h-max">
        <div>
          <h1 className="text-5xl font-bold  text-white"> Starter Blogs</h1>
          <p className="pt-8 p-2     text-white tracking-wide">
            Join over <span>1000 +</span> bloggers who use Starter Blog to share
            and advance their knowledge in the business sector. Easily create
            and share your knowledge, and guides via a blogs and explore more
            tools that can move your business to the next level.{" "}
          </p>

          <div className="mt-8 flex flex-row gap-2">
            <div className="border-2 border-white rounded-full grid place-content-center w-12 h-12 hover:text-red-600   hover:scale-110 transition delay-150 duration-300 ease-in-out">
              <FaFacebookF className="text-white text-2xl" />
            </div>
            <div className="border-2 border-white rounded-full grid place-content-center w-12 h-12 hover:text-red-600   hover:scale-110 transition delay-150 duration-300 ease-in-out">
              <FaGoogle className="text-white text-2xl" />
            </div>{" "}
            <div className="border-2 border-white rounded-full grid place-content-center w-12 h-12 hover:text-red-600   hover:scale-110 transition delay-150 duration-300 ease-in-out">
              <FaLinkedinIn className="text-white text-2xl" />
            </div>{" "}
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-white"> Explore</h1>
          <div className="mt-6">
            <Link className="text-lg text-white" to={"/start"}>
              Start
            </Link>
          </div>
          <div>
            <Link className="text-lg text-white" to={"/grow"}>
              Grow
            </Link>
          </div>
          <div>
            <Link className="text-lg text-white" to={"/monetize"}>
              Monetize
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-white">Company</h1>
          <div>Newsletter</div>
        </div>
        <div className=" h-max mt-10 col-span-3 flex flex-row justify-between items-center">
          <h1 className="text-white">
            Copyright © 2024 Starter, All rights reserved.
          </h1>
          <div className='flex flex-row gap-3 text-white '>
            <h1>Privacy Policy</h1>
            <h1>Terms of Use</h1>
            <h1>Cookies Policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer