import topics from '../../data/TopicsData';
import ScaleCard from "../../Components/ScaleCard";

import { IoArrowBack } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router";
const Topics = () => {
  return (
    <div className="flex w-full  flex-col items-center justify-center p-4 mb-20 gap-8">
      <div className='flex items-center justify-center flex-col  w-full"'>
        <h1 className="text-[3rem] tracking-wide text-black font-bold ">
          Explore more topics
        </h1>
        <p className="text-lg tracking-wide mt-2 ">
          Ready to brush up on something new? We&apos;ve got more to read right
          this way.
        </p>
      </div>
      <div className="flex flex-row gap-2">
        {" "}
        {topics.slice(0, 3).map((topic) => (
          <ScaleCard
            key={topic.id}
            card={
              <div className=" relative bg-gradient-to-br from-white rounded-bl-xl rounded-br-xl  to-[#1E2419] ">
                <div className="h-[30rem] w-[24rem]   bg- ">
                  <img
                    className="w-full h-full object-cover mix-blend-overlay"
                    src={topic.imageUrl}
                    alt=""
                  />
                </div>
                <div className="absolute  bottom-0 w-full  flex items-center flex-col p-4 ">
                  <h1 className="text-3xl text-white font-bold">
                    {topic.topic}
                  </h1>
                  <h1 className="mt-2 text-lg tracking-wide text-center line-clamp-3  text-white">
                    {topic.subtitle}
                  </h1>

                  <Link className="underline text-xl mt-4 text-blue-500">
                    Explore More
                  </Link>
                </div>
              </div>
            }
          />
        ))}
      </div>
      <div>
        <div className="flex flex-row gap-8 ">
          <span className="text-5xl font-bold cursor-pointer">
            <IoArrowBack />
          </span>
          <span className="text-5xl font-bold cursor-pointer">
            <IoArrowForwardOutline />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Topics