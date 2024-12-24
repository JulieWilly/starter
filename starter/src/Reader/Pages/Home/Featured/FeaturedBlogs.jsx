import Image from "../../../Components/Image";
import ScaleCard from "../../../Components/ScaleCard";
import TopNavigation from "../../../Components/TopNavigation";
import FeaturesCard from "./FeaturesCard";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const MostRead = () => {
  return (
    <div className="p-4 mt-8 w-full flex flex-row border-2 border-black   ">
      {/* Featured
      <div className="mt-6 ">
 <FeaturesCard />

        
      </div> */}

      <div className="border-2 border-black  w-3/4  ">
        <h1>Featured Posts</h1>
        {/* via-[#1E2419] */}
        <div className="border-2 border-red-500 flex flex-row gap-4 ">
          <ScaleCard
            card={
              <div className=" w-full h-full rounded-lg relative  ">
                <Image
                  path={
                    "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                />
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
          <div className="flex flex-col border-2 border-green-500 w-1/2 gap-4">
            <div className="w-full h-[15rem]  ">
              <Image
                path={
                  "https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
              />
            </div>
            dsjsdksdjk
            <div className="w-full h-[15rem]">
              <Image
                path={
                  "https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Most Read</h1>
        <div></div>
      </div>
    </div>
  );
};

export default MostRead;
