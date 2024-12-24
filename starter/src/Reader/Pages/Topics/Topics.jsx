import { MdNavigateNext } from "react-icons/md";
import topics from '../../data/TopicsData';
import Button from '../../Components/Button';
const Topics = () => {
  return (
    <div className="flex w-full  flex-col items-center justify-center p-4 mb-12">
      <div className='flex items-center justify-center flex-col  w-full"'>
        <h1 className="text-[3rem] tracking-wide text-black font-bold ">
          Explore more topics
        </h1>
        <p className="text-lg tracking-wide mt-2 ">
          Ready to brush up on something new? We&apos;ve got more to read right
          this way.
        </p>
      </div>
      <div className="  flex flex-row  mt-8 gap-4 items-center">
        {topics.slice(2).map((topic) => (
          <div key={topic.id} className="w-[20rem]">
            <div className="   h-40 overflow-hidden ">
              <img
                // src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=600"
                src={topic.imageUrl}
                className="w-full h-full object-cover block"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center ">
              {" "}
              <span className="text-center text-xl font-bold text-[#005FA3] tracking-wide underline hover:text-green-700 cursor-pointer  p-2">
                {topic.topic}
              </span>
              <MdNavigateNext className="text-2xl" />
            </div>
            
          </div>
        ))}
        <Button name={'More Topics' } />
      </div>
      
    </div>
  );
}

export default Topics