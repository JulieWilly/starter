import Image from "./Image";
import SubscribeInput from "./SubscribeInput";
import { TfiEmail } from "react-icons/tfi";
const SubscribePage = () => {
  return (
    <div className="  flex p-4  bg-[#1B4942] items-center flex-col">
      <div className="flex  items-center flex-col p-2  w-3/4">
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
