import React from 'react'

const LatestCard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 border-2 gap-2 border-black">
      <div className="row-span-3 ">
        <div className='w-full h-[20rem]'>
          <img
          className='w-full h-full block object-cover'
            src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div>
            <h1>Ideas to</h1>
        </div>
      </div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-500">C</div>
      <div className="bg-orange-500">D</div>
    </div>
  );
}

export default LatestCard