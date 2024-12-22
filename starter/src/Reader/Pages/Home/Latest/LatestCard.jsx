import { Link } from "react-router";
import LeftCard from "./LeftCard";
import { MdNavigateNext } from "react-icons/md";
import Image from "../../../Components/Image";
const LatestCard = () => {
  return (
    <div className="grid grid-cols-2 p-2  grid-rows-3 gap-2 justify-center   ">
      <LeftCard />
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-row-reverse justify-between">
          <div className="w-1/2  p-2">
            <h1 className="font-bold text-lg"> Must read blogs</h1>
            <h1 className="mt-4 mb-8 text-2xl font-bold line-clamp-3">
              7 Movies to watch for this summer, &apos;The boss baby; Back in
              the crib &apos;
            </h1>

            <span className="italic  ">March 5</span>
          </div>
          <div className="w-1/2  h-52">
            <Image path={'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=600'} />
          </div>
        </div>

        <hr className="h-[.1rem] bg-black " />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="w-1/2  p-2">
            <h1 className="font-bold text-lg"> Must read blogs</h1>
            <h1 className="mt-4 mb-8 text-2xl font-bold line-clamp-3">
              7 Movies to watch for this summer, &apos;The boss baby; Back in
              the crib &apos;
            </h1>

            <span className="italic  ">March 5</span>
          </div>
          <div className="w-1/2  h-52">
           <Image path={'https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
          </div>
        </div>

        <hr className="h-[.1rem] bg-black " />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row-reverse justify-between">
          <div className="w-1/2  p-2">
            <h1 className="font-bold text-lg"> Must read blogs</h1>
            <h1 className="mt-4 mb-8 text-2xl font-bold line-clamp-3">
              7 Movies to watch for this summer, &apos;The boss baby; Back in
              the crib &apos;
            </h1>

            <span className="italic  ">March 5</span>
          </div>
          <div className="w-1/2  h-52">
     <Image path={'https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=600'} />
          </div>
        </div>

        <hr className="h-[.1rem] bg-black " />
      </div>
      <div className="col-span-2 bg-red-500 h-max"></div>
      <div className="w-full flex col-span-2  justify-end items-center">
        <Link to={""} className="border-b-2 border-black">
          More Blogs{" "}
        </Link>{" "}
        <MdNavigateNext className="text-3xl" />
      </div>
    </div>
  );
}

export default LatestCard