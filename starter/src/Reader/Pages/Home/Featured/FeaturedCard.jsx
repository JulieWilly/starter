
const FeaturedCard = () => {
  return (
    <div
      className="border-2 border-black mt-6
    "
    >
      <div className="flex gap-2 ">
        <div className=" grow ">
          <div className="relative  ">
            <div className="rounded-md overflow-hidden">
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
            <div className="p-1">
              <div className="flex items-center justify-between">
                <h1>Athor</h1>
                <span>12/14/2024</span>
              </div>
              <h1 className=" line-clamp-2 text-xl font-bold text-[#8D1A5F]">
                New technology discoveredl
              </h1>
              <p className="mt-2 line-clamp-3 ">lorem inpsidsdklsdklsdsdkl</p>
              <div className="w-full flex justify-between items-center mt-4">
                <h1 className="text-xl ">Author</h1>
                <button className="bg-black  text-white p-2 w-24 rounded-sm hover:scale-95 hover:transition-all ">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" grow w-1/4  relative overflow-hidden ">
          <div className="h-96 rounded-lg overflow-hidden relative  ">
            <img
              className="w-full h-full object-cover block relative hover:block cursor-pointer "
              src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <span className="absolute top-0 right-0  p-1 bg-red-500 rounded-tr-md">
            {" "}
            Premium
          </span>
          <div className="p-2 bg-black    text-white absolute bottom-0">
            <div className="flex items-center justify-start gap-4 ">
              <h1>Author</h1>
              <span>5 hours ago</span>
            </div>
            <h1 className=" line-clamp-2 text-xl font-bold text-[#8D1A5F] mt-2 mb-2">
              Blog title
            </h1>
            <p className=" line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus recusandae totam optio! Voluptatem et, explicabo nam
              iusto iure itaque ipsam doloribus unde dolorum aliquam repudiandae
              cupiditate voluptate vel neque quam?
            </p>

            <div className="flex flex-row gap-2 mt-2">
              <h1 className="text-red-400 font-medium">Topic Area</h1>{" "}
              <span className="italic">10 min read</span>
            </div>
          </div>
        </div>

        <div className="grow">
            <div className="border border-black">
              <div className="h-40 relative">
                <img
                  className="w-full h-full block object-cover "
                  src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="blog image"
                />
                <div>
                  <span className="absolute top-0 right-0  p-1 bg-red-500 rounded-tr-md">
                    Premium
                  </span>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-start gap-4 text-sm font-bold mt-1 ">
                      <h1>Author</h1>
                      <span>5 hours ago</span>
                    </div>
                    <h1 className="line-clamp-2 text-[#8D1A5F] text-xl font-bold ">
                      Title of the blog
                    </h1>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <h1 className="text-lg text-red-400 font-bold">
                        Topic are
                      </h1>{" "}
                      <span className="text-sm italic">20 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard