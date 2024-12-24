import Image from "../../../Components/Image";
import ScaleCard from "../../../Components/ScaleCard";
import TopNavigation from "../../../Components/TopNavigation";
import data from "../../../data/FeaturedBlogs";
import FeaturesCard from "./FeaturesCard";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const MostRead = () => {
  return (
    <div className="p-2 mt-16 w-full flex flex-ro  ">
      {/* Featured
      <div className="mt-6 ">
 <FeaturesCard />

        
      </div> */}

      <div className=" w-3/4  ">
        <h1 className="p-2 text-2xl font-bold text-[#1B4942]">
          Featured Posts
        </h1>
        {/* via-[#1E2419] */}
        <div className=" flex flex-row gap-2 ">
          <ScaleCard
            card={
              <div className=" w-full h-full rounded-lg relative  ">
                <Image
                  path={
                    "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                />
               
                <div className="absolute top-2 left-2">
                  <h1 className="bg-red-400 w-max p-1 text-sm ">Premium</h1>
                </div>
                <div className="absolute bottom-0 p-2 right-0 bg-gradient-to-br from-white rounded-bl-xl rounded-br-xl  to-[#1E2419]   ">
                  <h1 className="text-xl font-bold font-serif border-t-2 border-black w-max">
                    {" "}
                    AI
                  </h1>
                  <h1 className="text-3xl  capitalize font-bold  tracking-wide line-clamp-2 mt-2 underline cursor-pointer  ">
                    OpenAI trained o1 and o3 to ‘think’ about its safety policy
                  </h1>
                  <div className="flex flex-row  items-center gap-2 mt-4 ">
                    <span>John Doe</span>
                    <spa>
                      <TfiLayoutLineSolid />
                    </spa>
                    <span>20 hours ago</span>
                  </div>
                </div>
              </div>
            }
          />
          <div className="flex flex-col  w-1/2 gap-4">
            <ScaleCard
              card={
                <div className="w-full h-[15rem] relative  ">
                  <Image
                    path={
                      "https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                  />
                  <div className=" absolute bottom-0 p-2 right-0 bg-gradient-to-br from-white rounded-bl-xl rounded-br-xl  to-[#1E2419]   ">
                    <h1 className="text-xl  capitalize font-bold  tracking-wide line-clamp-2 mt-2 underline cursor-pointer  ">
                      OpenAI trained o1 and o3 to ‘think’ about its safety
                      policy
                    </h1>
                    <div className="flex flex-row  items-center gap-2 mt-2 ">
                      <span className="text-sm font-bold">John Doe</span>
                      <spa>
                        <TfiLayoutLineSolid />
                      </spa>
                      <span className="text-sm">20 hours ago</span>
                    </div>
                  </div>
                </div>
              }
            />
            <ScaleCard
              card={
                <div className="w-full h-[15rem] relative  ">
                  <Image
                    path={
                      "https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                  />
                  <div className=" absolute bottom-0 p-2 right-0 bg-gradient-to-br from-white rounded-bl-xl rounded-br-xl  to-[#1E2419]   ">
                    <h1 className="text-xl  capitalize font-bold  tracking-wide line-clamp-2 mt-2 underline cursor-pointer  ">
                      OpenAI trained o1 and o3 to ‘think’ about its safety
                      policy
                    </h1>
                    <div className="flex flex-row  items-center gap-2 mt-2 ">
                      <span className="text-sm font-bold">John Doe</span>
                      <spa>
                        <TfiLayoutLineSolid />
                      </spa>
                      <span className="text-sm">20 hours ago</span>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className=" w-1/4 flex items-center flex-col">
        <h1 className="p-2 text-2xl font-bold text-[#1B4942]">Most Read </h1>
        {data.slice(0, 4).map((blog) => (
          <>
            <ScaleCard
              key={blog.id}
              card={
                <div className=" p-2 flex flex-row gap-2">
                  <div className="w-28 h-24 ">
                    <Image
                      path={
                        // "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=600"
                        blog.imageUrl
                      }
                    />
                  </div>
                  <div className="w-3/4">
                    <h1 className="text-lg capitalize font-bold  tracking-wide line-clamp-2 mt-2 underline cursor-pointer  ">
                      OpenAI trained o1 and o3 to ‘think’ about its safety
                      policy
                    </h1>
                    <h1 className="font-bold text-sm  mt-2">{blog.topic}</h1>
                  </div>
                </div>
              }
            />
            <hr className="h-[.12rem] bg-black w-3/4" />
          </>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
