
import { CiBadgeDollar } from "react-icons/ci";

const FeaturesCard = () => {
  return (
    <div className="w-full  grid grid-cols-2 grid-rows-1 mt-4 gap-2">
      <div className="relative flex flex-row bg-[#F0EAE5] rounded-lg">
        <div className=" relative w-1/2 h-52 ">
          <img
            className="object-cover w-full h-full "
            src="https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <span className="absolute top-1 left-1  p-1 bg-red-500 rounded">
          <CiBadgeDollar className="text-3xl" />
        </span>
        <div className="w-1/2 p-2 flex  justify-between flex-col">
          <div>
            <h1 className="line-clamp-2 text-2xl tracking-wide font-bold">
              This is a feature blog
            </h1>{" "}
            <h1 className="line-clamp-2 mt-2 font-light">
              This is the subtitle of the featured blog.
            </h1>
          </div>

          <div className="flex flex-row justify-between ">
            <h1 className="text-red-500 font-bold text-xl">Ideas</h1>
            <h1 className="italic">12/05/2024</h1>
          </div>
        </div>
      </div>
      <div className="relative flex flex-row bg-[#F0EAE5] rounded-lg">
        <div className=" relative w-1/2 h-52 ">
          <img
            className="object-cover w-full h-full "
            src="https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <span className="absolute top-1 left-1  p-1 bg-red-500 rounded">
          <CiBadgeDollar className="text-3xl" />
        </span>
        <div className="w-1/2 p-2 flex  justify-between flex-col">
          <div>
            <h1 className="line-clamp-2 text-2xl tracking-wide font-bold">
              This is a feature blog
            </h1>{" "}
            <h1 className="line-clamp-2 mt-2 font-light">
              This is the subtitle of the featured blog.
            </h1>
          </div>

          <div className="flex flex-row justify-between ">
            <h1 className="text-red-500 font-bold text-xl">Ideas</h1>
            <h1 className="italic">12/05/2024</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;