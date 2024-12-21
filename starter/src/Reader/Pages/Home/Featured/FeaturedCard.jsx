
const FeaturedCard = () => {
  return (
    <div
      className="border-2 border-black mt-6
    "
    >
      <div className="flex gap-2 ">
        <div className=" grow p-2  h-max">
          <div className="relative  ">
            <div className="rounded-md overflow-hidden border-2 border-black">
              <img
                className=" relative w-full h-48   block object-cover"
                src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="blog image"
              />
            </div>
            <span className="absolute top-0 right-0  p-1 bg-red-500 rounded-tr-md">
              {" "}
              Premium
            </span>
            <div className="p-2">
              <div className="flex items-center justify-between">
                <h1>Athor</h1>
                <span>12/14/2024</span>
              </div>
              <h1 className="truncate line-clamp-2 text-xl font-bold text-[#8D1A5F]">
                New technology discoveredl
              </h1>
              <p className="truncate mt-2 line-clamp-3 ">
                lorem inpsidsdklsdklsdsdkl
              </p>
              <div className="w-full flex justify-end mt-4">
                <button className="bg-black  text-white p-2 w-24 rounded-sm hover:scale-95 hover:transition-all ">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black grow w-1/4 h-max">B</div>
        <div className="border-2 border-black grow  h-max">
          <div>
            <img
              className="w-full h-48  block object-cover"
              src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="blog image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard