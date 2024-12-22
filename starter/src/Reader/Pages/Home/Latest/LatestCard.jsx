const LatestCard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 border-2 gap-2 border-black">
      <div className="row-span-3  max-h">
        <div className="w-full h-[20rem]">
          <img
            className="w-full h-full block object-cover"
            src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="p-2">
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
      <div className="bg-red-500">B</div>
      <div className="bg-green-500">C</div>
      <div className="bg-orange-500">D</div>
    </div>
  );
}

export default LatestCard