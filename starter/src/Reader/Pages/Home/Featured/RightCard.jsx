
import { CiBadgeDollar } from "react-icons/ci";
import { TbPointFilled } from "react-icons/tb";
const RightCard = ({redirect}) => {
  return (
    <div className="flex flex-col grow gap-1">
      <div className="cursor-pointer relative " onClick={redirect}>
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
            <div className="flex items-center justify-start gap-2 text-sm font-bold mt-1 ">
              <div className="w-4 h-4 border border-red-500 rounded-full flex items-center ">
                <TbPointFilled className=" text-red-500" />
              </div>
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
      <div className="cursor-pointer relative " onClick={redirect}>
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
            <div className="flex items-center justify-start gap-2 text-sm font-bold mt-1 ">
              <div className="w-4 h-4 border border-red-500 rounded-full flex items-center ">
                <TbPointFilled className=" text-red-500" />
              </div>
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
  );
}

export default RightCard