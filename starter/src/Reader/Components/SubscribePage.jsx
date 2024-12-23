import Image from "./Image";
import SubscribeInput from "./SubscribeInput";
import { TfiEmail } from "react-icons/tfi";
const SubscribePage = () => {
  return (
    <div className="  flex p-8  border border-black bg-[#1B4942]">
      <div className="w-1/2 flex flex-col p-2">
        <span className="text-[4rem] tracking-normal font-bold font-[cursive] text-[#8D1A5F] ">
          Sign up to
        </span>
        <span className="text-[4rem] tracking-normal font-bold font-[cursive] text-white ">
          Starter Blogs newsletter
        </span>

        <p className="text-white mt-2 font-light tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          itaque ipsum. Harum et dignissimos accusantium explicabo quae quasi
          doloremque ipsam.
        </p>
        <div className="mt-6">
          <SubscribeInput />
        </div>
      </div>
      <div className="w-1/2 h-[30rem] ml-2">
        <Image path={'https://thestory.au/_nuxt/image/319d7a.webp'} />
      </div>
    </div>
  );
};

export default SubscribePage;
