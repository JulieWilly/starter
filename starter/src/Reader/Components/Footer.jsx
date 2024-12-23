import React from 'react'
import { Link, NavLink } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import navigatioins from '../data/navLinks';
import items from '../data/bottomFooter';

const socials = [
  { id: 1, icon: <FaGoogle />, name: "Google" },
  { id: 1, icon: <FaFacebookF />, name: "Facebook" },
  { id: 1, icon: <FaLinkedinIn />, name: "LinkedIn" },
];
const Footer = () => {
  return (
    <div>
      <div className="flex bg-[#222222] p-8 gap-2 h-max flex-col small:w-full small:flex-col medium:flex-col ">
        <div className="flex flex-row gap-10">
          <div className="w-2/5">
            <h1 className="text-5xl font-bold  text-white"> Starter Blogs</h1>
            <p className="pt-8 p-2     text-white tracking-wide">
              Join over <span>1000 +</span> bloggers who use Starter Blog to
              share and advance their knowledge in the business sector. Easily
              create and share your knowledge, and guides via a blogs and
              explore more tools that can move your business to the next level.{" "}
            </p>
          </div>

          <div className="flex flex-row w-3/5">
            <div className="w-1/2">
              <h1 className="text-2xl text-white"> Explore</h1>
              <div className="mt-6 flex flex-col gap-2 ">
                {navigatioins.map((name) => (
                  <NavLink
                    key={name.id}
                    to={name.path}
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "black",
                    })}
                    className={"hover:border-b border-white  w-max   "}
                  >
                    <span className=" text-white text-lg tracking-wide ">
                      {" "}
                      {name.name}
                    </span>
                    {name.icon}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl text-white"> Follow Us</h1>
              <div className="mt-4 flex flex-row gap-2">
                {socials.map((social) => (
                  <div
                    key={social.id}
                    className="flex flex-col gap-2  p-2 items-center hover:text-red-600 hover:scale-110 transition delay-150 duration-300 ease-in-out "
                  >
                    <span className=" text-white text-2xl border-2 border-white rounded-full  place-content-center w-12 h-12 flex items-center justify-center   ">
                      {social.icon}
                    </span>
                    <span className=" text-white text-xl ">{social.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" h-max mt-10 col-span-3 flex flex-row justify-between items-center">
          <h1 className="text-white">
            Copyright © 2024 Starter, All rights reserved.
          </h1>
          <div className="flex flex-row gap-3 text-white ">
            {items.map((item) => (
              <h1 key={item.id}>{item.name}</h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer