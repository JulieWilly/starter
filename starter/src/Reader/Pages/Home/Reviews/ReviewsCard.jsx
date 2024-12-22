import React from 'react'
import Image from '../../../Components/Image';

const ReviewsCard = () => {
  return (
    <div className="w-full h-52 items-start flex flex-col justify-start   gap-4  p-4 rounded-2xl bg-[#DDDFFE] mt-2">
      <div className="flex flex-row gap-4 items-center ">
        <div
          className="w-16 h-16 rounded-full overflow-hidden
        "
        >
          <Image path={"https://randomuser.me/api/portraits/men/14.jpg"} />
        </div>
        <div className=" flex items-start  flex-col">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <h1>Role</h1>
        </div>
      </div>
      <div className="mt-2 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
        temporibus. Nisi quidem, architecto dignissimos nesciunt cupiditate
        fugit temporibus earum iure!
      </div>
    </div>
  );
}

export default ReviewsCard