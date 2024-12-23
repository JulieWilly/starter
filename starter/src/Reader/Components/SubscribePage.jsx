import SubscribeInput from "./SubscribeInput";
import { TfiEmail } from "react-icons/tfi";
const SubscribePage = () => {
  return (
    <div className="  flex items-center justify-center ">
      <div className="  mb-8 rounded-2xl  p-8 flex flex-col items-center  gap-4 w-4/5 bg-[#1B4942]">
<TfiEmail className="text-[4rem]  text-white" />
        <h1 className="text-3xl text-white font-bold">Join our news letter</h1>
        <p className="w-4/5  text-center tracking-wide font-light text-white pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          assumenda! Deleniti recusandae, nostrum est eos ex asperiores cumque
          obcaecati blanditiis 
        </p>
        <SubscribeInput />
      </div>
    </div>
  );
};

export default SubscribePage;
