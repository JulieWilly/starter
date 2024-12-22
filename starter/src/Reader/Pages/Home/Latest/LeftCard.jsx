import React from 'react'

const LeftCard = () => {
  return (
    <div className="row-span-3 w-full max-h flex items-center flex-col border-2 border-green-500">
      <div className="w-10/12 h-[20rem]">
        <img
          className="w-full h-full block object-cover"
          src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="p-2 w-10/12">
        <h1>Ideas to</h1>
        <h1 className="line-clamp-2 text-3xl font-bold mt-2 leading-normal ">
          This is a story that I would like to tell to everyone
        </h1>
        <p className="line-clamp-2 text-xm mt-2 font-light text-xl">
          Don&#39;t let these artists scam their way into your hearts
        </p>
        <div className="flex flex-row gap-4 items-center mt-4">
          {" "}
          <span>By Author</span>
          <span className="italic">June 12</span>
        </div>
      </div>
    </div>
  );
}

export default LeftCard