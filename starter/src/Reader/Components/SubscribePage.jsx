
import SubscribeInput from "./SubscribeInput";
import { MdEmail } from "react-icons/md";
const SubscribePage = () => {
  return (
    <div className="  flex p-4  bg-[#1B4942] items-center flex-col relative pb-8">
      <div className="border-2 w-24 h-24 rounded-full grid place-content-center absolute top-[-3rem] bg-white">
        <MdEmail className="text-[4rem]" />
      </div>
      <div className="flex  items-center flex-col p-2  w-3/4 mt-4">
        <span className="text-[3rem] tracking-normal font-bold font-[cursive]text-center text-[#8D1A5F] ">
          Subscribe to
        </span>
        <span className="text-[3rem] tracking-normal font-bold font-[cursive] text-white ">
          Starter Blogs newsletter
        </span>

        <p className="text-white w-1/2 text-center  mt-2 font-light tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          itaque ipsum. Harum et dignissimos accusantium explicabo quae quasi
          doloremque ipsam.
        </p>
        <div className="w-1/2 mt-8">
          <SubscribeInput />
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
