import React from 'react'
import Image from '../../../Components/Image';

const LeftCard = () => {
  return (
    <div className="row-span-3 w-full max-h flex items-center flex-col">
      <div className="w-10/12 h-[20rem]">
      <Image path={'https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&w=600'} />
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