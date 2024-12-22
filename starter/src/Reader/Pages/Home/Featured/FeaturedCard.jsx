import { CiBadgeDollar } from "react-icons/ci";
import { useNavigate } from "react-router";
const FeaturedCard = () => {
  const redirectTo = useNavigate();

  // navigate to reading blog page
  const toReadBlog = () => {
    redirectTo('/read-blog/:blog_id')
  }
  return (
    <div
      className="  mt-6
    "
    >
      <div className="flex gap-2  ">
        <div
          className=" grow cursor-pointer elevation-3 h-max "
          onClick={toReadBlog}
        >
          <div className="relative   ">
            <div className="rounded-md overflow-hidden  hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300">
              <img
                className=" relative w-full h-64   block object-cover mix-blend-darken "
                src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="blog image"
              />
            </div>
            <span className="absolute top-1 right-1  p-1 bg-red-500 rounded-tr-md">
              {" "}
              {/* Premium */}
              <CiBadgeDollar className="text-2xl" />
            </span>
            <div className="p-1">
              <div className="flex items-center justify-between ">
                <h1>Athor</h1>
                <span className="italic font-bold">12/14/2024</span>
              </div>
              <h1 className=" line-clamp-2 text-xl font-bold text-[#8D1A5F]">
                New technology discoveredl
              </h1>
              <div className="w-full flex justify-start items-center mt-4 gap-2">
                <h1 className="text-red-400 font-medium">Topic Area</h1>{" "}
                <span className="italic">10 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" grow  relative  w-1/4 h-auto overflow-hidden  "
          onClick={toReadBlog}
        >
          <div className=" h-96 relative  rounded-lg overflow-hidden     hover:bg-gradient-to-r hover:from-orange-500 hover:to-[#baaa62] ">
            <img
              className=" w-full h-full object-cover block  cursor-pointer absolute   mix-blend-darken "
              src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />

            <div className="p-2 mt-52        bg-[#151b28]  relative  text-white top-10">
              <div className="flex items-center justify-start gap-4 ">
                <h1>Author</h1>
                <span>50 hours ago</span>
              </div>
              <h1 className=" line-clamp-1 text-xl font-bold text-[#8D1A5F] mt-2 mb-2">
                Blog title
              </h1>
              <p className=" line-clamp-2">Topic subtitle</p>
              <div className="flex flex-row gap-2 mt-2">
                <h1 className="text-red-400 font-medium">Topic Area</h1>{" "}
                <span className="italic">10 min read</span>
              </div>
            </div>
          </div>
          <span className="absolute  top-0 right-0  p-1 bg-red-500 rounded-tr-md">
            {" "}
            Premium
          </span>
        </div>

        <div className="flex flex-col grow gap-1">
          <div className="cursor-pointer relative " onClick={toReadBlog}>
            <div className="h-28  overflow-hidden hover:bg-gradient-to-r hover:from-orange-500 hover:to-[#baaa62] ">
              <img
                className="w-full h-full block object-cover rounded  mix-blend-darken"
                src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="blog image"
              />
            </div>
            <span className="absolute top-1 right-1  p-1 bg-red-500 rounded-tr-md">
              <CiBadgeDollar className="text-2xl" />
            </span>
            <div>
              <div className="flex flex-col">
                <div className="flex items-center justify-start gap-4 text-sm font-bold mt-1 ">
                  <h1>Author</h1>
                  <span>5 hours ago</span>
                </div>
                <h1 className="line-clamp-2 text-[#8D1A5F] text-xl font-bold ">
                  Title of the blog
                </h1>
                <div className="flex flex-row items-center justify-start gap-1">
                  <h1 className="text-lg text-red-400 font-bold">Topic are</h1>{" "}
                  <span className="text-sm italic">20 mins read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer relative " onClick={toReadBlog}>
            <div className="h-28  overflow-hidden hover:bg-gradient-to-r hover:from-orange-500 hover:to-[#baaa62]  ">
              <img
                className="w-full h-full block object-cover rounded mix-blend-darken "
                src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="blog image"
              />
            </div>
            <span className="absolute top-1 right-1  p-1 bg-red-500 rounded-tr-md">
              <CiBadgeDollar className="text-2xl" />
            </span>
            <div>
              <div className="flex flex-col">
                <div className="flex items-center justify-start gap-4 text-sm font-bold mt-1 ">
                  <h1>Author</h1>
                  <span>5 hours ago</span>
                </div>
                <h1 className="line-clamp-2 text-[#8D1A5F] text-xl font-bold ">
                  Title of the blog
                </h1>
                <div className="flex flex-row items-center justify-start gap-1">
                  <h1 className="text-lg text-red-400 font-bold">Topic are</h1>{" "}
                  <span className="text-sm italic">20 mins read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
